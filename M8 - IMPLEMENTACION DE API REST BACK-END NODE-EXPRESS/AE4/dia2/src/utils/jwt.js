import jwt from "jsonwebtoken";

const privateKey =
  "7gnY?1E8vI/KLRrXifxREA-Lr4CHkZ!0I1BIfb8rymbunkqbJN-xj!a04PSYGxhpwcCxmdkL00A4gdV85Xjs4stzPnk5uQzzOMsQQQ9NWnkOPW9qO?XIf2I50Q1w-UyKuOLGNxKSg!6GoC3iV1HhckuLDwLx6q4SNOB!fJhlgEm0Yjf2yE0GiZ8g7rZ0OVnZJdAUKnCryfar7kL?TbOF9yBFQU?oq3ERuYRqTsm?ww/hz7t2uX/hxx4W1M2ZmhYv";

const sign = (data) => jwt.sign(data, privateKey, { expiresIn: "1h" });

const verify = (token) =>
  jwt.verify(token, privateKey, (err, decoded) =>
    err ? { code: 401, error: err.message } : decoded
  );


  export { sign, verify }