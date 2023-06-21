import { filter } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input()
  public deliminator: string = ">";
  breadcrumbs:any=[]
constructor(private router:Router,private route:ActivatedRoute) {
  this.router.events
             .pipe(
                filter(event => event instanceof NavigationEnd)).subscribe(event => {
                 this.breadcrumbs = [];
                 let currentRoute:any = this.route.root,
                 url = "";
            do {
     const childrenRoutes = currentRoute.children;
     currentRoute = null;
     childrenRoutes.forEach((route:any) => {
        if (route.outlet === "primary") {
            const routeSnapshot = route.snapshot;
            url += "/" + routeSnapshot.url.map((segment:any) => segment.path).join("/");
            this.breadcrumbs.push({label:route.snapshot.data.breadCrum,url: url});
           currentRoute = route;
         }
      });
     } while (currentRoute);
     this.breadcrumbs.splice(0,3)
   });
}
  ngOnInit(): void {
  }


}

