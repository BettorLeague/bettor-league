import { NgModule } from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {UserService} from "./auth/user.service";
import {SidenavService} from "./layout/sidenav.service";
import {RankingService} from "./football/ranking.service";
import {HeaderService} from "./layout/header.service";
import {CompetitionService} from "./football/competition.service";
import {ContestService} from "./bettor/contest.service";

@NgModule({
  providers: [
    AuthService,
    UserService,
    SidenavService,
    RankingService,
    CompetitionService,
    ContestService,
    HeaderService
  ]
})
export class ServicesModule { }
