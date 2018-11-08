import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header';
// import { StudentsPageModule } from './pages/students/students.module';
import { PagesModule } from './pages';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    // the order does matter
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HeaderModule,
        PagesModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: !environment.production,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
