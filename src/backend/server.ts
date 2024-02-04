import express from 'express';
import canister from './canister/mycanister';
import { CreateCanisterResult } from 'azle/canisters/management';

const app = express();
const port = 3000;

app.use(express.static('src'));

app.post('/create-canister', async (req, res) => {
    const result: CreateCanisterResult = await canister.executeCreateCanister();
    res.json({ canisterCreated: result });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
const CanisterMethods = {
    
  };
  
  export default CanisterMethods;
