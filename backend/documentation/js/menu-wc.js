'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AnswersModule.html" data-type="entity-link" >AnswersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AnswersModule-c6abd8b7c49281db23879a2f3887033337533fd4bcc656a7d3ffc1adb91f004f784e24dc201c9bc6b27cd1ebf5ebeb042981669fac4982a3ba99c88a37873767"' : 'data-target="#xs-controllers-links-module-AnswersModule-c6abd8b7c49281db23879a2f3887033337533fd4bcc656a7d3ffc1adb91f004f784e24dc201c9bc6b27cd1ebf5ebeb042981669fac4982a3ba99c88a37873767"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AnswersModule-c6abd8b7c49281db23879a2f3887033337533fd4bcc656a7d3ffc1adb91f004f784e24dc201c9bc6b27cd1ebf5ebeb042981669fac4982a3ba99c88a37873767"' :
                                            'id="xs-controllers-links-module-AnswersModule-c6abd8b7c49281db23879a2f3887033337533fd4bcc656a7d3ffc1adb91f004f784e24dc201c9bc6b27cd1ebf5ebeb042981669fac4982a3ba99c88a37873767"' }>
                                            <li class="link">
                                                <a href="controllers/AnswersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnswersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AnswersModule-c6abd8b7c49281db23879a2f3887033337533fd4bcc656a7d3ffc1adb91f004f784e24dc201c9bc6b27cd1ebf5ebeb042981669fac4982a3ba99c88a37873767"' : 'data-target="#xs-injectables-links-module-AnswersModule-c6abd8b7c49281db23879a2f3887033337533fd4bcc656a7d3ffc1adb91f004f784e24dc201c9bc6b27cd1ebf5ebeb042981669fac4982a3ba99c88a37873767"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AnswersModule-c6abd8b7c49281db23879a2f3887033337533fd4bcc656a7d3ffc1adb91f004f784e24dc201c9bc6b27cd1ebf5ebeb042981669fac4982a3ba99c88a37873767"' :
                                        'id="xs-injectables-links-module-AnswersModule-c6abd8b7c49281db23879a2f3887033337533fd4bcc656a7d3ffc1adb91f004f784e24dc201c9bc6b27cd1ebf5ebeb042981669fac4982a3ba99c88a37873767"' }>
                                        <li class="link">
                                            <a href="injectables/AnswersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnswersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SurveysModule.html" data-type="entity-link" >SurveysModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SurveysModule-0df7f0b4e7e8d039f03e03ce768fed65f6e245dbfe908394ea788b3dc2db6a386921ee33bd9f4e9dbcb7f3c749ae26ec110c058ec9840b29d0a972bc01f49f3b"' : 'data-target="#xs-controllers-links-module-SurveysModule-0df7f0b4e7e8d039f03e03ce768fed65f6e245dbfe908394ea788b3dc2db6a386921ee33bd9f4e9dbcb7f3c749ae26ec110c058ec9840b29d0a972bc01f49f3b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SurveysModule-0df7f0b4e7e8d039f03e03ce768fed65f6e245dbfe908394ea788b3dc2db6a386921ee33bd9f4e9dbcb7f3c749ae26ec110c058ec9840b29d0a972bc01f49f3b"' :
                                            'id="xs-controllers-links-module-SurveysModule-0df7f0b4e7e8d039f03e03ce768fed65f6e245dbfe908394ea788b3dc2db6a386921ee33bd9f4e9dbcb7f3c749ae26ec110c058ec9840b29d0a972bc01f49f3b"' }>
                                            <li class="link">
                                                <a href="controllers/SurveysController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SurveysController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SurveysModule-0df7f0b4e7e8d039f03e03ce768fed65f6e245dbfe908394ea788b3dc2db6a386921ee33bd9f4e9dbcb7f3c749ae26ec110c058ec9840b29d0a972bc01f49f3b"' : 'data-target="#xs-injectables-links-module-SurveysModule-0df7f0b4e7e8d039f03e03ce768fed65f6e245dbfe908394ea788b3dc2db6a386921ee33bd9f4e9dbcb7f3c749ae26ec110c058ec9840b29d0a972bc01f49f3b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SurveysModule-0df7f0b4e7e8d039f03e03ce768fed65f6e245dbfe908394ea788b3dc2db6a386921ee33bd9f4e9dbcb7f3c749ae26ec110c058ec9840b29d0a972bc01f49f3b"' :
                                        'id="xs-injectables-links-module-SurveysModule-0df7f0b4e7e8d039f03e03ce768fed65f6e245dbfe908394ea788b3dc2db6a386921ee33bd9f4e9dbcb7f3c749ae26ec110c058ec9840b29d0a972bc01f49f3b"' }>
                                        <li class="link">
                                            <a href="injectables/SurveysService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SurveysService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-5c7145953cc690a1beb4dbfe13dddce6d2cec200d0b5616844e22412f290b3b3389a7911e526ec36879e20e3d51f6933bce2bbf50bea02c29ba1f78475eeff1e"' : 'data-target="#xs-controllers-links-module-UsersModule-5c7145953cc690a1beb4dbfe13dddce6d2cec200d0b5616844e22412f290b3b3389a7911e526ec36879e20e3d51f6933bce2bbf50bea02c29ba1f78475eeff1e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-5c7145953cc690a1beb4dbfe13dddce6d2cec200d0b5616844e22412f290b3b3389a7911e526ec36879e20e3d51f6933bce2bbf50bea02c29ba1f78475eeff1e"' :
                                            'id="xs-controllers-links-module-UsersModule-5c7145953cc690a1beb4dbfe13dddce6d2cec200d0b5616844e22412f290b3b3389a7911e526ec36879e20e3d51f6933bce2bbf50bea02c29ba1f78475eeff1e"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-5c7145953cc690a1beb4dbfe13dddce6d2cec200d0b5616844e22412f290b3b3389a7911e526ec36879e20e3d51f6933bce2bbf50bea02c29ba1f78475eeff1e"' : 'data-target="#xs-injectables-links-module-UsersModule-5c7145953cc690a1beb4dbfe13dddce6d2cec200d0b5616844e22412f290b3b3389a7911e526ec36879e20e3d51f6933bce2bbf50bea02c29ba1f78475eeff1e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-5c7145953cc690a1beb4dbfe13dddce6d2cec200d0b5616844e22412f290b3b3389a7911e526ec36879e20e3d51f6933bce2bbf50bea02c29ba1f78475eeff1e"' :
                                        'id="xs-injectables-links-module-UsersModule-5c7145953cc690a1beb4dbfe13dddce6d2cec200d0b5616844e22412f290b3b3389a7911e526ec36879e20e3d51f6933bce2bbf50bea02c29ba1f78475eeff1e"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Answer.html" data-type="entity-link" >Answer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Answer-1.html" data-type="entity-link" >Answer</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnswerType.html" data-type="entity-link" >AnswerType</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAnswerDto.html" data-type="entity-link" >CreateAnswerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSurveyDto.html" data-type="entity-link" >CreateSurveyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAllSurveyDto.html" data-type="entity-link" >FindAllSurveyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Option.html" data-type="entity-link" >Option</a>
                            </li>
                            <li class="link">
                                <a href="classes/Question.html" data-type="entity-link" >Question</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuestionType.html" data-type="entity-link" >QuestionType</a>
                            </li>
                            <li class="link">
                                <a href="classes/Survey.html" data-type="entity-link" >Survey</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/JwtUserGuard.html" data-type="entity-link" >JwtUserGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AnswerCreationAttrs.html" data-type="entity-link" >AnswerCreationAttrs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OptionCreationAttrs.html" data-type="entity-link" >OptionCreationAttrs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuestionCreationAttrs.html" data-type="entity-link" >QuestionCreationAttrs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SurveyCreationAttrs.html" data-type="entity-link" >SurveyCreationAttrs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserCreatingAttrs.html" data-type="entity-link" >UserCreatingAttrs</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});