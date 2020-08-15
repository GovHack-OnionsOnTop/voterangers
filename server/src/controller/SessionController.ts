import { getRepository } from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Session } from "../entity/Session";
import { User } from "../entity/User";

export class SessionController {
  private sessionRepository = getRepository(Session);
  private userRepository = getRepository(User);

  async login(request: Request, response: Response, next: NextFunction) {
    let user = await this.userRepository.findOne({ email: request.body.email });
    let password = request.body.password;
    
    if(user === undefined) {
      response.status(404).send('Not Found')
    } else {
      let session = await this.sessionRepository.createQueryBuilder("session")
      .innerJoin("session.user", "user")
      .getOne() as Session;
      if(session === undefined) {
        session = new Session()
        session.accessToken = "1234"
        session.user = user

      } else {
        session.accessToken = "4321"
      }
      this.sessionRepository.save(session);
      let response = {
        user: user, session: session
      }
      return response;
    }
  }
}