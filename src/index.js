import express from "express"

const app = express();

const PORT = 521;

const mockUsers = [
    { id: 1, name: "jayant" },
    { id: 2, name: "himansh" },
    { id: 3, name: "jatin" }
]

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})

app.get('/', (req, res) => {
    res.send(mockUsers);
})

app.get('/api/user', (req, res) => {
    res.send(mockUsers);
})

app.get("/api/user/:id", (req, res) => {
    console.log(req.params)
    const parseId = parseInt(req.params.id);
    console.log(parseId);
    const findUser = mockUsers.find((user) => {return user.id===parseId})
    //if(!findUser)return res.status(404).send({msg:"User not found"})
    res.send(findUser);
})