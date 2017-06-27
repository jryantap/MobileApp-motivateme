/**Injectable class for reddit api**/
import {Injectable} from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RedditService{
  http: any;
  url : string;
  constructor(http: Http){
    this.http = http;
    this.url = 'https://www.reddit.com/r';
  }

  //get post from reddit api, adding category for now since I may add more subreddits later
  getPost(category, limit){
    return this.http.get(this.url +'/' + category + '/hot.json?limit=' + limit).map(res => res.json());
  }

}
