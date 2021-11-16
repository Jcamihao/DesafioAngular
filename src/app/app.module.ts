import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiService } from './API/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoService } from './contato.service';
import { AddUsuarioComponent } from './Crud/add-usuario/add-usuario.component';
import { DeleteUsuarioComponent } from './Crud/delete-usuario/delete-usuario.component';
import { EditarUsuarioComponent } from './Crud/editar-usuario/editar-usuario.component';
import { InfosService } from './infos.service';
import { PerfilComponent } from './perfil/perfil.component';
import { FilterByName } from './sidebar/filterByName.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from './signin/auth.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignUpService } from './signup/signup.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PerfilComponent,
    AddUsuarioComponent,
    DeleteUsuarioComponent,
    EditarUsuarioComponent,
    FilterByName,
    SigninComponent,
    SignupComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    CommonModule,
    MatListModule,
    FontAwesomeModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatDatepickerModule,
  ],

  providers: [
    ContatoService,
    InfosService,
    SignUpService,
    AuthService,
    ApiService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2000 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
