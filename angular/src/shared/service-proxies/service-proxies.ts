﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.2.3.0 (NJsonSchema v10.1.5.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class AccountServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    isTenantAvailable(body: IsTenantAvailableInput | undefined): Observable<IsTenantAvailableOutput> {
        let url_ = this.baseUrl + "/api/services/app/Account/IsTenantAvailable";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",			
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json", 
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processIsTenantAvailable(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processIsTenantAvailable(<any>response_);
                } catch (e) {
                    return <Observable<IsTenantAvailableOutput>><any>_observableThrow(e);
                }
            } else
                return <Observable<IsTenantAvailableOutput>><any>_observableThrow(response_);
        }));
    }

    protected processIsTenantAvailable(response: HttpResponseBase): Observable<IsTenantAvailableOutput> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = IsTenantAvailableOutput.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<IsTenantAvailableOutput>(<any>null);
    }
}

@Injectable()
export class SessionServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getCurrentLoginInfos(): Observable<CurrentLoginInfoOutput> {
        let url_ = this.baseUrl + "/api/services/app/Session/GetCurrentLoginInfos";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",			
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetCurrentLoginInfos(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetCurrentLoginInfos(<any>response_);
                } catch (e) {
                    return <Observable<CurrentLoginInfoOutput>><any>_observableThrow(e);
                }
            } else
                return <Observable<CurrentLoginInfoOutput>><any>_observableThrow(response_);
        }));
    }

    protected processGetCurrentLoginInfos(response: HttpResponseBase): Observable<CurrentLoginInfoOutput> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = CurrentLoginInfoOutput.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<CurrentLoginInfoOutput>(<any>null);
    }
}

@Injectable()
export class TokenAuthServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    authenticate(body: AuthenticateModel | undefined): Observable<AuthenticateResultModel> {
        let url_ = this.baseUrl + "/api/TokenAuth/Authenticate";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",			
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json", 
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAuthenticate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAuthenticate(<any>response_);
                } catch (e) {
                    return <Observable<AuthenticateResultModel>><any>_observableThrow(e);
                }
            } else
                return <Observable<AuthenticateResultModel>><any>_observableThrow(response_);
        }));
    }

    protected processAuthenticate(response: HttpResponseBase): Observable<AuthenticateResultModel> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AuthenticateResultModel.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AuthenticateResultModel>(<any>null);
    }
}

export class IsTenantAvailableInput implements IIsTenantAvailableInput {
    tenancyName: string;

    constructor(data?: IIsTenantAvailableInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.tenancyName = _data["tenancyName"];
        }
    }

    static fromJS(data: any): IsTenantAvailableInput {
        data = typeof data === 'object' ? data : {};
        let result = new IsTenantAvailableInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        return data; 
    }

    clone(): IsTenantAvailableInput {
        const json = this.toJSON();
        let result = new IsTenantAvailableInput();
        result.init(json);
        return result;
    }
}

export interface IIsTenantAvailableInput {
    tenancyName: string;
}

export enum TenantAvailabilityState {
    Available = 1,
    InActive = 2,
    NotFound = 3,
}

export class IsTenantAvailableOutput implements IIsTenantAvailableOutput {
    state: TenantAvailabilityState;
    tenantId: number | undefined;

    constructor(data?: IIsTenantAvailableOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.state = _data["state"];
            this.tenantId = _data["tenantId"];
        }
    }

    static fromJS(data: any): IsTenantAvailableOutput {
        data = typeof data === 'object' ? data : {};
        let result = new IsTenantAvailableOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["state"] = this.state;
        data["tenantId"] = this.tenantId;
        return data; 
    }

    clone(): IsTenantAvailableOutput {
        const json = this.toJSON();
        let result = new IsTenantAvailableOutput();
        result.init(json);
        return result;
    }
}

export interface IIsTenantAvailableOutput {
    state: TenantAvailabilityState;
    tenantId: number | undefined;
}

export class ApplicationInfoDto implements IApplicationInfoDto {
    version: string | undefined;
    releaseDate: moment.Moment;

    constructor(data?: IApplicationInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.version = _data["version"];
            this.releaseDate = _data["releaseDate"] ? moment(_data["releaseDate"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): ApplicationInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new ApplicationInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["version"] = this.version;
        data["releaseDate"] = this.releaseDate ? this.releaseDate.toISOString() : <any>undefined;
        return data; 
    }

    clone(): ApplicationInfoDto {
        const json = this.toJSON();
        let result = new ApplicationInfoDto();
        result.init(json);
        return result;
    }
}

export interface IApplicationInfoDto {
    version: string | undefined;
    releaseDate: moment.Moment;
}

export class UserLoginInfoDto implements IUserLoginInfoDto {
    name: string | undefined;
    surname: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    id: number;

    constructor(data?: IUserLoginInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.surname = _data["surname"];
            this.userName = _data["userName"];
            this.emailAddress = _data["emailAddress"];
            this.id = _data["id"];
        }
    }

    static fromJS(data: any): UserLoginInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserLoginInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["id"] = this.id;
        return data; 
    }

    clone(): UserLoginInfoDto {
        const json = this.toJSON();
        let result = new UserLoginInfoDto();
        result.init(json);
        return result;
    }
}

export interface IUserLoginInfoDto {
    name: string | undefined;
    surname: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    id: number;
}

export class TenantLoginInfoDto implements ITenantLoginInfoDto {
    tenancyName: string | undefined;
    name: string | undefined;
    id: number;

    constructor(data?: ITenantLoginInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.tenancyName = _data["tenancyName"];
            this.name = _data["name"];
            this.id = _data["id"];
        }
    }

    static fromJS(data: any): TenantLoginInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new TenantLoginInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["id"] = this.id;
        return data; 
    }

    clone(): TenantLoginInfoDto {
        const json = this.toJSON();
        let result = new TenantLoginInfoDto();
        result.init(json);
        return result;
    }
}

export interface ITenantLoginInfoDto {
    tenancyName: string | undefined;
    name: string | undefined;
    id: number;
}

export class CurrentLoginInfoOutput implements ICurrentLoginInfoOutput {
    application: ApplicationInfoDto | undefined;
    user: UserLoginInfoDto | undefined;
    tenant: TenantLoginInfoDto | undefined;

    constructor(data?: ICurrentLoginInfoOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.application = _data["application"] ? ApplicationInfoDto.fromJS(_data["application"]) : <any>undefined;
            this.user = _data["user"] ? UserLoginInfoDto.fromJS(_data["user"]) : <any>undefined;
            this.tenant = _data["tenant"] ? TenantLoginInfoDto.fromJS(_data["tenant"]) : <any>undefined;
        }
    }

    static fromJS(data: any): CurrentLoginInfoOutput {
        data = typeof data === 'object' ? data : {};
        let result = new CurrentLoginInfoOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["application"] = this.application ? this.application.toJSON() : <any>undefined;
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        data["tenant"] = this.tenant ? this.tenant.toJSON() : <any>undefined;
        return data; 
    }

    clone(): CurrentLoginInfoOutput {
        const json = this.toJSON();
        let result = new CurrentLoginInfoOutput();
        result.init(json);
        return result;
    }
}

export interface ICurrentLoginInfoOutput {
    application: ApplicationInfoDto | undefined;
    user: UserLoginInfoDto | undefined;
    tenant: TenantLoginInfoDto | undefined;
}

export class AuthenticateModel implements IAuthenticateModel {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean;

    constructor(data?: IAuthenticateModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.userNameOrEmailAddress = _data["userNameOrEmailAddress"];
            this.password = _data["password"];
            this.rememberClient = _data["rememberClient"];
        }
    }

    static fromJS(data: any): AuthenticateModel {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticateModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userNameOrEmailAddress"] = this.userNameOrEmailAddress;
        data["password"] = this.password;
        data["rememberClient"] = this.rememberClient;
        return data; 
    }

    clone(): AuthenticateModel {
        const json = this.toJSON();
        let result = new AuthenticateModel();
        result.init(json);
        return result;
    }
}

export interface IAuthenticateModel {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean;
}

export class AuthenticateResultModel implements IAuthenticateResultModel {
    accessToken: string | undefined;
    encryptedAccessToken: string | undefined;
    expireInSeconds: number;
    userId: number;

    constructor(data?: IAuthenticateResultModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.accessToken = _data["accessToken"];
            this.encryptedAccessToken = _data["encryptedAccessToken"];
            this.expireInSeconds = _data["expireInSeconds"];
            this.userId = _data["userId"];
        }
    }

    static fromJS(data: any): AuthenticateResultModel {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticateResultModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["userId"] = this.userId;
        return data; 
    }

    clone(): AuthenticateResultModel {
        const json = this.toJSON();
        let result = new AuthenticateResultModel();
        result.init(json);
        return result;
    }
}

export interface IAuthenticateResultModel {
    accessToken: string | undefined;
    encryptedAccessToken: string | undefined;
    expireInSeconds: number;
    userId: number;
}

export class ApiException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = event => { 
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob); 
        }
    });
}