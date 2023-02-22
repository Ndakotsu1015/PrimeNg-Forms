import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AccordionModule } from "primeng/accordion";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { DividerModule } from "primeng/divider";
import { InputMaskModule } from "primeng/inputmask";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { StyleClassModule } from "primeng/styleclass";
import { TableModule } from "primeng/table";
import { TabMenuModule } from "primeng/tabmenu";
import { ToastModule } from "primeng/toast";

@NgModule({
    imports: [
        CommonModule,
        AccordionModule,
        CardModule,
        DividerModule,
        TableModule,
        InputTextModule,
        FormsModule,
        InputMaskModule,
        ButtonModule,
        CheckboxModule,
        ToastModule,
        MessagesModule,
        MessageModule,
        ReactiveFormsModule,
        StyleClassModule,
        TabMenuModule,
        MenuModule,
        BrowserAnimationsModule,
        MenubarModule,
        RouterModule,
        HttpClientModule,

    ],


    providers: [
        MessageService
    ],

    exports: [
        AccordionModule,
        CardModule,
        DividerModule,
        TableModule,
        InputTextModule,
        FormsModule,
        InputMaskModule,
        ButtonModule,
        CheckboxModule,
        ToastModule,
        MessagesModule,
        MessageModule,
        ReactiveFormsModule,
        StyleClassModule,
        TabMenuModule,
        MenuModule,
        BrowserAnimationsModule,
        MenubarModule,
        RouterModule,
        HttpClientModule,

    ]
})


export class SharedModule {

}