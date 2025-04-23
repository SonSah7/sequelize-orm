import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes/index.js';
import db from './models/index.js';

const app = express();

app.use(cors());                          
app.use(helmet());                        
app.use(morgan('dev'));                   
app.use(express.json());                  
app.use(express.urlencoded({ extended: true })); 


const initializeDatabase = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection established');
    
    await db.sequelize.sync({ alter: true });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

app.use('/api', routes); 


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await initializeDatabase();
  console.log(`Server running on port ${PORT}`);
});

export default app;