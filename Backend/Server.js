import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import itemRoutes from './Routes.js'

const app = express();
app.use(cors());
app.use(express.json());




// MongoDB connection 
// const URL="mongodb+srv://shoebk478:Shoebkhan@cluster0.uo8wtid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const URL="mongodb+srv://shoebkhan2336:shoebaaf2102@poetrycluster.ythdlmi.mongodb.net/?retryWrites=true&w=majority&appName=poetrycluster"
mongoose.connect(URL).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/items', itemRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// Mx271Z1irtPLkpoW