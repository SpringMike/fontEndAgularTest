import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuBarComponent } from './homepage/menu-bar/menu-bar.component';
import { HotNewsComponent } from './homepage/hot-news/hot-news.component';
import { BodyNewsComponent } from './homepage/body-news/body-news.component';
import { SideBarComponent } from './homepage/side-bar/side-bar.component';
import { FooterComponent } from './homepage/footer/footer.component';
const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
];


@NgModule({
  declarations: [UsersComponent, HomepageComponent, MenuBarComponent, HotNewsComponent, BodyNewsComponent, SideBarComponent, FooterComponent],
  exports: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UsersRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
