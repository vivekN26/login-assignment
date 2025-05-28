import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private apiCount = signal(0);

    isLoading() {
        return this.apiCount() > 0;
    }

    show() {
        this.apiCount.set(this.apiCount() + 1);
    }

    hide() {
        const current = this.apiCount();
        if(current > 0) {
            this.apiCount.set(current - 1);
        }
    }
}