import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContatoService } from './contato.service';
import { InfosService } from './infos.service';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './perfil/perfil.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
  ],
  providers: [ContatoService, InfosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
