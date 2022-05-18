import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { CategoryDetailsComponent } from './pages/categories/category-details/category-details.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { UpdateCategoryComponent } from './pages/categories/update-category/update-category.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/statistiques/page-statistiques.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageUtilisateursComponent } from './pages/utilisateur/page-utilisateurs/page-utilisateurs.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { VueEnsembleComponent } from './vue-ensemble/vue-ensemble.component';
import { CreateFournisseurComponent } from './create-fournisseur/create-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';
import { DtailFournisseurComponent } from './dtail-fournisseur/dtail-fournisseur.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { DtailArticleComponent } from './dtail-article/dtail-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { CreateCommandeClientComponent } from './create-commande-client/create-commande-client.component';
import { DtailCommandeClientComponent } from './dtail-commande-client/dtail-commande-client.component';
import { UpdateCommandeClientComponent } from './update-commande-client/update-commande-client.component';
import { PageCommandeFournisseursComponent } from './page-commande-fournisseurs/page-commande-fournisseurs.component';
import { NouvelleCommandeFournisseurComponent } from './nouvelle-commande-fournisseur/nouvelle-commande-fournisseur.component';
import { DtailCommandeFournisseurComponent } from './dtail-commande-fournisseur/dtail-commande-fournisseur.component';
import { UpdateCommandeFournisseurComponent } from './update-commande-fournisseur/update-commande-fournisseur.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DtailUserComponent } from './dtail-user/dtail-user.component';

const routes: Routes = [
{
  //C'est l'url de la page login http://localhost:8080/login
  path: 'login',
  component: PageLoginComponent
},

{
  //C'est l'url de la page login http://localhost:8080/inscrire

  path: 'inscrire',
  component: PageInscriptionComponent,
  

},

{
  //C'est l'url de la page login http://localhost:8080/

  path: '',
  component: PageDashboardComponent,
  children:[
    {
    path:'statistiques',
    component:PageStatistiquesComponent

    },
    { 
      path:'VueEnsemble',
      component:VueEnsembleComponent

    },

    {
      path:'articles',
      component:PageArticleComponent

    },


    {
      path:'nouvelArticle',
      component:NouvelArticleComponent

    },
    {
      path:'updateArticle/:id',
      component:UpdateArticleComponent
   },
    {
      path:'detailArticle/:id',
      component: DtailArticleComponent
     },

    {
      path:'mvtstk',
      component:PageMvtstkComponent

    },

    {
      path:'clients',
      component:PageClientComponent

    },

    {
      path:'nouveauClient',
      component:NouveauCltFrsComponent,
      data:{
        origin:'client'
      }
    },
    {
       path:'updateClient/:id',
       component:UpdateClientComponent
    },
    {
     path:'detailClient/:id',
     component:DetailClientComponent
    },

    {
      path:'CommandesClients',
      component:PageCmdCltFrsComponent,
      data:{
        origin:'client'
      }

    },

    {
      path:'nouvellecommandeClt',
      /*
      component:NouvelleCmdCltFrsComponent,
      data:{
        origin:'client'
      }*/
      component:CreateCommandeClientComponent

    },
    { 
      path:'detail-CommandeClient/:id',
      component:DtailCommandeClientComponent

    },
    {
      path:'updateCC/:id',
      component:UpdateCommandeClientComponent
   },

    {
      path:'fournisseurs',
      component:PageFournisseurComponent

    },
    
    {
      path:'nouveauFournisseur',
      component:CreateFournisseurComponent
    },
    {
      path:'updateFournisseur/:id',
      component:UpdateFournisseurComponent
   },
   {
    path:'detailFournisseur/:id',
    component:DtailFournisseurComponent
   },
    {
      path:'commandesFournisseurs',
      component:PageCommandeFournisseursComponent,
      data:{
        origin:'fournisseur'
      }

    },

    {
      path:'nouvellecommandeFrs',
      component:NouvelleCommandeFournisseurComponent,
      data:{
        origin:'fournisseur'
      }

    },
    
    { 
      path:'detail-CommandeFournisseur/:id',
      component:DtailCommandeFournisseurComponent

    },
    
    {
      path:'updateCF/:id',
      component:UpdateCommandeFournisseurComponent

   },
    
    {
      path:'categories',
      component:PageCategoriesComponent

    },

    {
      path:'nouvellecategorie',
      component:NouvelleCategoryComponent

    },

    { 
      path:'updateCategory/:id',
      component:UpdateCategoryComponent

    },

    { 
      path:'Category-details/:id',
      component:CategoryDetailsComponent

    },

    {
      path:'utilisateurs',
      component:PageUtilisateursComponent

    },
    
    {
      path:'nouvelutilisateur',
      component:NouvelUtilisateurComponent

    },
    { 
      path:'updateUser/:id',
      component:UpdateUserComponent


    },
    {
      path:'Userdetails/:id',
     component:DtailUserComponent
    },
    {
      path:'profil',
      component:PageProfilComponent

    },

    {
      path:'changermotDePasse',
      component:ChangerMotDePasseComponent

    },
    
    
  ]
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
