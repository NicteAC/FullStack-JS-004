const yargs = require("yargs");

yargs
  .command(
    "PING",
    "",
    {
      numero: {
        describe: "",
        demand: true,
        alias: "n",
      },
    },
    (args) => {
      console.log(`PONG ${args.numero}`);
    }
  )
  .help().argv;
