const express = require('express');
const app  = express();
app.get('/', (req, res) => {
    res.send('Hi ketan!');
})
;app.listen(5001, () => {
  console.log('Server is running on port 5001');
});