import { Router, Response, Request, NextFunction } from 'express';
import { userPath, router as userRouter } from './User/user.routes';

const routes = [{ path: userPath, action: userRouter }];
const mainRoute = Router();

routes.forEach(router => {
    mainRoute.use(router.path, router.action);
});

// mainRoute.use('/count', (req: Request, res: Response, next: NextFunction) => {
//     if (!req.session!.hi) {
//         req.session!.hi = '';
//     }

//     // count the views
//     req.session!.hi = (req.session!.hi || 0) + 1;

//     res.json({ view: req.session!.hi });
// });
export default mainRoute;
