import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { MoveStockComponent } from './pages/move-stock/move-stock/move-stock.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';

const routes: Routes = [
  {
    path: 'login', component: PageLoginComponent
  },
  {
    path: 'register', component: PageInscriptionComponent
  },
  {
    path: '', component: PageDashboardComponent,
    children: [
      { path: 'dashboard', component: PageDashboardComponent },
      { path: 'statistiques', component: PageStatistiquesComponent },
      { path: 'articles', component: PageArticleComponent },
      { path: 'nouvel-article', component: NouvelArticleComponent },
      { path: 'move-stock', component: MoveStockComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
