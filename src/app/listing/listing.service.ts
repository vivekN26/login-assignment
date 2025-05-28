import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { List } from "./list.model";
import { API_ENDPOINTS } from "../shared/constants/api-endpoints";

@Injectable()

export class ListService {

    private readonly LIST_API = API_ENDPOINTS.ITEMS;
    constructor(private readonly http: HttpClient) {}

    getItems(): Observable<List[]> {
        return this.http.get<List[]>(this.LIST_API);
    }
}