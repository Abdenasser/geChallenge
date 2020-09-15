import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryComponent } from './repository/repository.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [AppComponent, RepositoryComponent, TimeAgoPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
