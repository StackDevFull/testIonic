import {Page, NavController} from 'ionic-angular';
import {GithubService} from '../../providers/github-service/github-service';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [GithubService]
})
export class Page1 {
      public foundRepos;
      public username;

      constructor(private github: GithubService,
                  private nav: NavController) {
      }

      getRepos() {
          this.github.getRepos(this.username).subscribe(
              data => {
                  this.foundRepos = data.json();
              },
              err => console.error(err),
              () => console.log('getRepos completed')
          );
      }
      
      goToDetails(repo) {
          //this.nav.push(DetailsPage, { repo: repo });
      }
}
