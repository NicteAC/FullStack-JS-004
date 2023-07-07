const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../db/db');

router.get('/obtener-todos', async (req, res)=>{
    const maestros = await obtenerTodosLosMaestros();
    console.log('maestros', maestros);
    res.send(maestros);
    
});
router.post('/crear', async (req, res)=>{
    let listaPokemon = [];
    if(req.body.lista_pokemon.length > 0 && req.body.lista_pokemon.length < 7){
        console.log('tiene pokemones');
        const promesas_pokemon = req.body.lista_pokemon.map( async(pokemon) =>{
            const result = await obtenerPokemonConNombre(pokemon);
            return result;
        });
        console.log('promesas',promesas_pokemon);
       await Promise.all(promesas_pokemon).then(res =>{
            console.log('respuesta promesa', res);
            listaPokemon = res;
        }).catch(err=>{
            console.log('ocurrio un error en una promesa', err);
        })
    }
    if(req.body.nombre && req.body.edad){
        const maestro = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            genero: req.body.genero,
            ciudad_origen: req.body.ciudad_origen,
            cantidad_medallas: req.body.cantidad_medallas,
            lista_pokemon: listaPokemon
        };
        console.log('maestro', maestro);
        crearMaestro(maestro);
        res.send(maestro);
    }
});

const obtenerPokemonConNombre = async (nombre_pokemon)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre_pokemon}`;
    let pokemon = {};
    await axios.get(url).then(res=>{
        if(res.data){
            console.log();
            pokemon = {
                nombre: res.data.name,
                peso:res.data.weight,
                altura:res.data.height,
            }
            console.log('pokemon', pokemon);
        }
    }).catch(err=>{
        console.log('error axios: ', err);
    });
    return new Promise((resolve, reject)=>{
        resolve(pokemon);
    });
};
const crearMaestro = async (maestro) => {
    try {
        let id_maestro = null;
        let id_pokemon = [];
        const connection = await db.getConnection();
        await connection.beginTransaction();
        const query = 'INSERT INTO maestro(nombre,edad,genero,ciudad_origen,cantidad_medallas)VALUES(?,?,?,?,?)';
        const [rows] = await connection.execute(query,[maestro.nombre, maestro.edad, maestro.genero, maestro.ciudad_origen, maestro.cantidad_medallas]);
        if(rows.insertId > 0){
            id_maestro = rows.insertId;
        }else{
            connection.rollback();
        }
        for (const pokemon of maestro.lista_pokemon) {
            const values = [pokemon.nombre, pokemon.peso, pokemon.altura]
            const [result] = await connection.query(`INSERT INTO pokemon(nombre,peso,altura)VALUES(?,?,?)`,values);
            console.log('resultado insert pokemon:', result);
            if(result.insertId > 0){
                id_pokemon.push(result.insertId);
            }else{
                connection.rollback();
            }
        }
        if(id_pokemon.length > 0){
            for (const id_ of id_pokemon) {
                const [result] = await connection.query(`INSERT INTO maestro_pokemon(id_maestro, id_pokemon) VALUES(?,?)`,[id_maestro, id_]);
                if(result.affectedRows == 0){
                    connection.rollback();
                }
            }
        }
        await connection.commit();
        connection.release();
        console.log('respuesta db', rows);
    } catch (error) {
        console.log('error db', error);
    }
};
const obtenerTodosLosMaestros = async () => {
    try {
        const connection = await db.getConnection();
        const query = `SELECT * FROM torneo_pokemon.maestro_pokemon
        JOIN maestro on maestro.id_maestro = maestro_pokemon.id_maestro
        JOIN pokemon on pokemon.id_pokemon = maestro_pokemon.id_pokemon;`;
        const [rows] = await connection.execute(query);
        if(rows.length > 0){
            console.log('lista maestro',rows);
            return rows;
        }
    } catch (error) {
        console.log('error db', error);
    }
};
module.exports = router;