
import express,{Request, Response, NextFunction} from 'express';

// create the express app

const app = express();
const port = 3000;

app.use((req: Request, res: Response, next: NextFunction) =>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});


app.get('/awesome/applicant', (req: Request, res: Response, ) => {
	const information = {
		name: 'Sarah Yakum', 
		about: 'I enjoy reading and watching movies'
	};

	res.json(information);
});

app.listen(port, () =>{
	console.log('Server is running on http://localhost:${port}');

})
