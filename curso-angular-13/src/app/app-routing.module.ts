import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
  {path: 'input', component: ParentDataComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'events', component: EventosComponent},
  {path: 'output', component: EmitterComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'two-way', component: TwoWayBindingComponent},
  {path: 'services', component: ListRenderComponent}, // o mesmo componente "list"
  {path: 'http-client', component: ListRenderComponent}, // o mesmo componente "list"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
