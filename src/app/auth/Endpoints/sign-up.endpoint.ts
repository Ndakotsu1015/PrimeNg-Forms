import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthRequestDto } from "../dto/authDto";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class SignUpEndPoint {

    baseUrl = environment.apiUrl

    constructor(private readonly httpClient: HttpClient) { }

    login(authRequestDto: AuthRequestDto) {
        return this.httpClient.post(`${this.baseUrl}/auth/login`, { authRequestDto });
    }

}