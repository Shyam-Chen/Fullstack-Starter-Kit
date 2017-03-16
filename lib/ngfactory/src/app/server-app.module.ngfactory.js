/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from '../../../app/server-app.module';
import * as import2 from '@angular/http';
import * as import3 from '@angular/common';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/platform-server';
import * as import6 from '../../../transfer-state.server.module';
import * as import7 from '@angular/router';
import * as import8 from '../../../app/app.module';
import * as import9 from '../../../transfer-state';
<<<<<<< HEAD
import * as import10 from './app.module.ngfactory';
import * as import11 from './app.component.ngfactory';
=======
import * as import10 from './home-view.component.ngfactory';
import * as import11 from './app.component.ngfactory';
import * as import12 from '../../../app/home-view.component';
>>>>>>> dc4570b... 211th Commit
var ServerAppModuleInjector = (function (_super) {
    __extends(ServerAppModuleInjector, _super);
    function ServerAppModuleInjector(parent) {
        return _super.call(this, parent, [
<<<<<<< HEAD
            import10.HomeComponentNgFactory,
            import10.AboutComponentNgFactory,
=======
            import10.HomeViewNgFactory,
>>>>>>> dc4570b... 211th Commit
            import11.AppComponentNgFactory
        ], [import11.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(ServerAppModuleInjector.prototype, "_BrowserXhr_10", {
        get: function () {
            if ((this.__BrowserXhr_10 == null)) {
                (this.__BrowserXhr_10 = new import5.ɵe());
            }
            return this.__BrowserXhr_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_ResponseOptions_11", {
        get: function () {
            if ((this.__ResponseOptions_11 == null)) {
                (this.__ResponseOptions_11 = new import2.BaseResponseOptions());
            }
            return this.__ResponseOptions_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_XSRFStrategy_12", {
        get: function () {
            if ((this.__XSRFStrategy_12 == null)) {
                (this.__XSRFStrategy_12 = new import5.ɵf());
            }
            return this.__XSRFStrategy_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_XHRBackend_13", {
        get: function () {
            if ((this.__XHRBackend_13 == null)) {
                (this.__XHRBackend_13 = new import2.XHRBackend(this._BrowserXhr_10, this._ResponseOptions_11, this._XSRFStrategy_12));
            }
            return this.__XHRBackend_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_RequestOptions_14", {
        get: function () {
            if ((this.__RequestOptions_14 == null)) {
                (this.__RequestOptions_14 = new import2.BaseRequestOptions());
            }
            return this.__RequestOptions_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_Http_15", {
        get: function () {
            if ((this.__Http_15 == null)) {
                (this.__Http_15 = import5.ɵg(this._XHRBackend_13, this._RequestOptions_14));
            }
            return this.__Http_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_LOCALE_ID_16", {
        get: function () {
            if ((this.__LOCALE_ID_16 == null)) {
                (this.__LOCALE_ID_16 = import0.ɵo(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_NgLocalization_17", {
        get: function () {
            if ((this.__NgLocalization_17 == null)) {
                (this.__NgLocalization_17 = new import3.NgLocaleLocalization(this._LOCALE_ID_16));
            }
            return this.__NgLocalization_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_ApplicationRef_23", {
        get: function () {
            if ((this.__ApplicationRef_23 == null)) {
                (this.__ApplicationRef_23 = this._ɵf_22);
            }
            return this.__ApplicationRef_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_Compiler_24", {
        get: function () {
            if ((this.__Compiler_24 == null)) {
                (this.__Compiler_24 = new import0.Compiler());
            }
            return this.__Compiler_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_APP_ID_25", {
        get: function () {
            if ((this.__APP_ID_25 == null)) {
                (this.__APP_ID_25 = import0.ɵg());
            }
            return this.__APP_ID_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_\u0275d_26", {
        get: function () {
            if ((this.__ɵd_26 == null)) {
                (this.__ɵd_26 = new import5.ɵd(this.parent.get(import4.DOCUMENT), this.parent.get(import4.ɵTRANSITION_ID, null)));
            }
            return this.__ɵd_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_\u0275SharedStylesHost_27", {
        get: function () {
            if ((this.__ɵSharedStylesHost_27 == null)) {
                (this.__ɵSharedStylesHost_27 = this._ɵd_26);
            }
            return this.__ɵSharedStylesHost_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_AnimationDriver_28", {
        get: function () {
            if ((this.__AnimationDriver_28 == null)) {
                (this.__AnimationDriver_28 = import4.ɵc());
            }
            return this.__AnimationDriver_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_\u0275b_29", {
        get: function () {
            if ((this.__ɵb_29 == null)) {
                (this.__ɵb_29 = new import5.ɵb(this.parent.get(import4.DOCUMENT), this._ɵSharedStylesHost_27, this._AnimationDriver_28, this._APP_ID_25, this.parent.get(import0.NgZone)));
            }
            return this.__ɵb_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_RootRenderer_30", {
        get: function () {
            if ((this.__RootRenderer_30 == null)) {
                (this.__RootRenderer_30 = import5.ɵa(this._ɵb_29));
            }
            return this.__RootRenderer_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_DomSanitizer_31", {
        get: function () {
            if ((this.__DomSanitizer_31 == null)) {
                (this.__DomSanitizer_31 = new import4.ɵf(this.parent.get(import4.DOCUMENT)));
            }
            return this.__DomSanitizer_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_Sanitizer_32", {
        get: function () {
            if ((this.__Sanitizer_32 == null)) {
                (this.__Sanitizer_32 = this._DomSanitizer_31);
            }
            return this.__Sanitizer_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_\u0275z_33", {
        get: function () {
            if ((this.__ɵz_33 == null)) {
                (this.__ɵz_33 = new import0.ɵz(this.parent.get(import0.NgZone)));
            }
            return this.__ɵz_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_\u0275ViewUtils_34", {
        get: function () {
            if ((this.__ɵViewUtils_34 == null)) {
                (this.__ɵViewUtils_34 = new import0.ɵViewUtils(this._RootRenderer_30, this._Sanitizer_32, this._ɵz_33));
            }
            return this.__ɵViewUtils_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_IterableDiffers_35", {
        get: function () {
            if ((this.__IterableDiffers_35 == null)) {
                (this.__IterableDiffers_35 = import0.ɵm());
            }
            return this.__IterableDiffers_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_KeyValueDiffers_36", {
        get: function () {
            if ((this.__KeyValueDiffers_36 == null)) {
                (this.__KeyValueDiffers_36 = import0.ɵn());
            }
            return this.__KeyValueDiffers_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_37", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_37 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_37 = new import4.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_38", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_38 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_38 = [
                    new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
                    new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
                    new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT), this._HAMMER_GESTURE_CONFIG_37)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_EventManager_39", {
        get: function () {
            if ((this.__EventManager_39 == null)) {
                (this.__EventManager_39 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_38, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_\u0275DomRootRenderer_41", {
        get: function () {
            if ((this.__ɵDomRootRenderer_41 == null)) {
                (this.__ɵDomRootRenderer_41 = new import4.ɵDomRootRenderer_(this.parent.get(import4.DOCUMENT), this._EventManager_39, this._ɵDomSharedStylesHost_40, this._AnimationDriver_28, this._APP_ID_25));
            }
            return this.__ɵDomRootRenderer_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_\u0275DomRendererFactoryV2_42", {
        get: function () {
            if ((this.__ɵDomRendererFactoryV2_42 == null)) {
                (this.__ɵDomRendererFactoryV2_42 = new import4.ɵDomRendererFactoryV2(this._EventManager_39, this._ɵDomSharedStylesHost_40));
            }
            return this.__ɵDomRendererFactoryV2_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_\u0275c_43", {
        get: function () {
            if ((this.__ɵc_43 == null)) {
                (this.__ɵc_43 = new import5.ɵc(this.parent.get(import0.NgZone), this.parent.get(import4.DOCUMENT), this._ɵSharedStylesHost_27));
            }
            return this.__ɵc_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_RendererFactoryV2_44", {
        get: function () {
            if ((this.__RendererFactoryV2_44 == null)) {
                (this.__RendererFactoryV2_44 = this._ɵc_43);
            }
            return this.__RendererFactoryV2_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_Meta_45", {
        get: function () {
            if ((this.__Meta_45 == null)) {
                (this.__Meta_45 = new import4.Meta(this.parent.get(import4.DOCUMENT)));
            }
            return this.__Meta_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_Title_46", {
        get: function () {
            if ((this.__Title_46 == null)) {
                (this.__Title_46 = new import4.Title(this.parent.get(import4.DOCUMENT)));
            }
            return this.__Title_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_TransferState_47", {
        get: function () {
            if ((this.__TransferState_47 == null)) {
                (this.__TransferState_47 = new import9.TransferState());
            }
            return this.__TransferState_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_APP_BASE_HREF_48", {
        get: function () {
            if ((this.__APP_BASE_HREF_48 == null)) {
                (this.__APP_BASE_HREF_48 = '/');
            }
            return this.__APP_BASE_HREF_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_ROUTER_CONFIGURATION_49", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_49 == null)) {
                (this.__ROUTER_CONFIGURATION_49 = {});
            }
            return this.__ROUTER_CONFIGURATION_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_LocationStrategy_50", {
        get: function () {
            if ((this.__LocationStrategy_50 == null)) {
                (this.__LocationStrategy_50 = import7.ɵc(this.parent.get(import3.PlatformLocation), this._APP_BASE_HREF_48, this._ROUTER_CONFIGURATION_49));
            }
            return this.__LocationStrategy_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_Location_51", {
        get: function () {
            if ((this.__Location_51 == null)) {
                (this.__Location_51 = new import3.Location(this._LocationStrategy_50));
            }
            return this.__Location_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_UrlSerializer_52", {
        get: function () {
            if ((this.__UrlSerializer_52 == null)) {
                (this.__UrlSerializer_52 = new import7.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_RouterOutletMap_53", {
        get: function () {
            if ((this.__RouterOutletMap_53 == null)) {
                (this.__RouterOutletMap_53 = new import7.RouterOutletMap());
            }
            return this.__RouterOutletMap_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_NgModuleFactoryLoader_54", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_54 == null)) {
                (this.__NgModuleFactoryLoader_54 = new import0.SystemJsNgModuleLoader(this._Compiler_24, this.parent.get(import0.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_ROUTES_55", {
        get: function () {
            if ((this.__ROUTES_55 == null)) {
                (this.__ROUTES_55 = [[
                        {
                            path: '',
<<<<<<< HEAD
                            component: import8.HomeComponent,
                            pathMatch: 'full'
                        },
                        {
                            path: 'about',
                            component: import8.AboutComponent,
                            pathMatch: 'full'
=======
                            component: import12.HomeView,
                            pathMatch: 'full'
                        },
                        {
                            path: 'lazy',
                            loadChildren: './lazy.module#LazyModule'
>>>>>>> dc4570b... 211th Commit
                        }
                    ]
                ]);
            }
            return this.__ROUTES_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_Router_56", {
        get: function () {
            if ((this.__Router_56 == null)) {
                (this.__Router_56 = import7.ɵe(this._ApplicationRef_23, this._UrlSerializer_52, this._RouterOutletMap_53, this._Location_51, this, this._NgModuleFactoryLoader_54, this._Compiler_24, this._ROUTES_55, this._ROUTER_CONFIGURATION_49, this.parent.get(import7.UrlHandlingStrategy, null), this.parent.get(import7.RouteReuseStrategy, null)));
            }
            return this.__Router_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_ActivatedRoute_57", {
        get: function () {
            if ((this.__ActivatedRoute_57 == null)) {
                (this.__ActivatedRoute_57 = import7.ɵf(this._Router_56));
            }
            return this.__ActivatedRoute_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_PreloadAllModules_61", {
        get: function () {
            if ((this.__PreloadAllModules_61 == null)) {
                (this.__PreloadAllModules_61 = new import7.PreloadAllModules());
            }
            return this.__PreloadAllModules_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_NgProbeToken_62", {
        get: function () {
            if ((this.__NgProbeToken_62 == null)) {
                (this.__NgProbeToken_62 = [import7.ɵb()]);
            }
            return this.__NgProbeToken_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_ROUTER_INITIALIZER_63", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_63 == null)) {
                (this.__ROUTER_INITIALIZER_63 = import7.ɵg(this._Router_56, this._ApplicationRef_23, this._RouterPreloader_60, this._ROUTER_CONFIGURATION_49));
            }
            return this.__ROUTER_INITIALIZER_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerAppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_64", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_64 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_64 = [this._ROUTER_INITIALIZER_63]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_64;
        },
        enumerable: true,
        configurable: true
    });
    ServerAppModuleInjector.prototype.createInternal = function () {
        this._HttpModule_0 = new import2.HttpModule();
        this._CommonModule_1 = new import3.CommonModule();
        this._ApplicationModule_2 = new import0.ApplicationModule();
        this._BrowserModule_3 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._ServerModule_4 = new import5.ServerModule();
        this._ServerTransferStateModule_5 = new import6.ServerTransferStateModule();
        this._ɵa_6 = import7.ɵd(this.parent.get(import7.Router, null));
        this._RouterModule_7 = new import7.RouterModule(this._ɵa_6);
        this._AppModule_8 = new import8.AppModule();
        this._ServerAppModule_9 = new import1.ServerAppModule();
        this._ErrorHandler_18 = import4.ɵa();
        this._APP_INITIALIZER_19 = [import0.ɵp];
        this._ApplicationInitStatus_20 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_19);
        this._Testability_21 = new import0.Testability(this.parent.get(import0.NgZone));
        this._ɵf_22 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_18, this, this._ApplicationInitStatus_20, this.parent.get(import0.TestabilityRegistry, null), this._Testability_21);
        this._ɵDomSharedStylesHost_40 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT));
        this._NoPreloading_58 = new import7.NoPreloading();
        this._PreloadingStrategy_59 = this._NoPreloading_58;
        this._RouterPreloader_60 = new import7.RouterPreloader(this._Router_56, this._NgModuleFactoryLoader_54, this._Compiler_24, this, this._PreloadingStrategy_59);
        return this._ServerAppModule_9;
    };
    ServerAppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.HttpModule)) {
            return this._HttpModule_0;
        }
        if ((token === import3.CommonModule)) {
            return this._CommonModule_1;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_2;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_3;
        }
        if ((token === import5.ServerModule)) {
            return this._ServerModule_4;
        }
        if ((token === import6.ServerTransferStateModule)) {
            return this._ServerTransferStateModule_5;
        }
        if ((token === import7.ɵa)) {
            return this._ɵa_6;
        }
        if ((token === import7.RouterModule)) {
            return this._RouterModule_7;
        }
        if ((token === import8.AppModule)) {
            return this._AppModule_8;
        }
        if ((token === import1.ServerAppModule)) {
            return this._ServerAppModule_9;
        }
        if ((token === import2.BrowserXhr)) {
            return this._BrowserXhr_10;
        }
        if ((token === import2.ResponseOptions)) {
            return this._ResponseOptions_11;
        }
        if ((token === import2.XSRFStrategy)) {
            return this._XSRFStrategy_12;
        }
        if ((token === import2.XHRBackend)) {
            return this._XHRBackend_13;
        }
        if ((token === import2.RequestOptions)) {
            return this._RequestOptions_14;
        }
        if ((token === import2.Http)) {
            return this._Http_15;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_16;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_17;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_18;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_19;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_20;
        }
        if ((token === import0.Testability)) {
            return this._Testability_21;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_22;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_23;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_24;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_25;
        }
        if ((token === import5.ɵd)) {
            return this._ɵd_26;
        }
        if ((token === import4.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_27;
        }
        if ((token === import4.AnimationDriver)) {
            return this._AnimationDriver_28;
        }
        if ((token === import5.ɵb)) {
            return this._ɵb_29;
        }
        if ((token === import0.RootRenderer)) {
            return this._RootRenderer_30;
        }
        if ((token === import4.DomSanitizer)) {
            return this._DomSanitizer_31;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_32;
        }
        if ((token === import0.ɵz)) {
            return this._ɵz_33;
        }
        if ((token === import0.ɵViewUtils)) {
            return this._ɵViewUtils_34;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_35;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_36;
        }
        if ((token === import4.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_37;
        }
        if ((token === import4.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_38;
        }
        if ((token === import4.EventManager)) {
            return this._EventManager_39;
        }
        if ((token === import4.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_40;
        }
        if ((token === import4.ɵDomRootRenderer)) {
            return this._ɵDomRootRenderer_41;
        }
        if ((token === import4.ɵDomRendererFactoryV2)) {
            return this._ɵDomRendererFactoryV2_42;
        }
        if ((token === import5.ɵc)) {
            return this._ɵc_43;
        }
        if ((token === import0.RendererFactoryV2)) {
            return this._RendererFactoryV2_44;
        }
        if ((token === import4.Meta)) {
            return this._Meta_45;
        }
        if ((token === import4.Title)) {
            return this._Title_46;
        }
        if ((token === import9.TransferState)) {
            return this._TransferState_47;
        }
        if ((token === import3.APP_BASE_HREF)) {
            return this._APP_BASE_HREF_48;
        }
        if ((token === import7.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_49;
        }
        if ((token === import3.LocationStrategy)) {
            return this._LocationStrategy_50;
        }
        if ((token === import3.Location)) {
            return this._Location_51;
        }
        if ((token === import7.UrlSerializer)) {
            return this._UrlSerializer_52;
        }
        if ((token === import7.RouterOutletMap)) {
            return this._RouterOutletMap_53;
        }
        if ((token === import0.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_54;
        }
        if ((token === import7.ROUTES)) {
            return this._ROUTES_55;
        }
        if ((token === import7.Router)) {
            return this._Router_56;
        }
        if ((token === import7.ActivatedRoute)) {
            return this._ActivatedRoute_57;
        }
        if ((token === import7.NoPreloading)) {
            return this._NoPreloading_58;
        }
        if ((token === import7.PreloadingStrategy)) {
            return this._PreloadingStrategy_59;
        }
        if ((token === import7.RouterPreloader)) {
            return this._RouterPreloader_60;
        }
        if ((token === import7.PreloadAllModules)) {
            return this._PreloadAllModules_61;
        }
        if ((token === import0.NgProbeToken)) {
            return this._NgProbeToken_62;
        }
        if ((token === import7.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_63;
        }
        if ((token === import0.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_64;
        }
        return notFoundResult;
    };
    ServerAppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_22.ngOnDestroy();
        this._ɵDomSharedStylesHost_40.ngOnDestroy();
        this._RouterPreloader_60.ngOnDestroy();
    };
    return ServerAppModuleInjector;
}(import0.ɵNgModuleInjector));
export var ServerAppModuleNgFactory = new import0.NgModuleFactory(ServerAppModuleInjector, import1.ServerAppModule);