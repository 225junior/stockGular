import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauClientFournisseurComponent } from './components/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { MoveStockComponent } from './pages/move-stock/move-stock/move-stock.component';
import { PageClientComponent } from './pages/page-client/page-client/page-client.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageFournisseurComponent } from './pages/page-fournisseur/page-fournisseur/page-fournisseur.component';
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
      { path: 'clients', component: PageClientComponent },
      { path: 'nouveau-client', component: NouveauClientFournisseurComponent },
      { path: 'fournisseurs', component: PageFournisseurComponent },
      { path: 'nouveau-fournisseur', component: NouveauClientFournisseurComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
