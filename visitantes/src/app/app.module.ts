import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BajasComponent } from './bajas/bajas.component';
import { BitacoraTrabajadoresComponent } from './bitacora-trabajadores/bitacora-trabajadores.component';
import { EntregarPaqueteComponent } from './entregar-paquete/entregar-paquete.component';
import { InformesComponent } from './informes/informes.component';
import { LogInComponent } from './log-in/log-in.component';
import { PagosComponent } from './pagos/pagos.component';
import { RegistrarAgendaComponent } from './registrar-agenda/registrar-agenda.component';
import { RegistrarPaqueteriaComponent } from './registrar-paqueteria/registrar-paqueteria.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { TrabajadorServicioComponent } from './trabajador-servicio/trabajador-servicio.component';
import { VisitaGuardiaComponent } from './visita-guardia/visita-guardia.component';
import { AltasModificacionesComponent } from './altas-modificaciones/altas-modificaciones.component';
import { AgendaCondominoComponent } from './agenda-condomino/agenda-condomino.component';
import { VisitaCondominoComponent } from './visita-condomino/visita-condomino.component';
import { PruebaDeAntisemitaComponent } from './prueba-de-antisemita/prueba-de-antisemita.component';

@NgModule({
  declarations: [
    AppComponent,
    BajasComponent,
    BitacoraTrabajadoresComponent,
    EntregarPaqueteComponent,
    InformesComponent,
    LogInComponent,
    PagosComponent,
    RegistrarAgendaComponent,
    RegistrarPaqueteriaComponent,
    RegistrarSalidaComponent,
    TrabajadorComponent,
    TrabajadorServicioComponent,
    VisitaGuardiaComponent,
    AltasModificacionesComponent,
    AgendaCondominoComponent,
    VisitaCondominoComponent,
    PruebaDeAntisemitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
