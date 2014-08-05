angular.module('polymerAngular', ['polymerAngular.generalattributes', 'polymerAngular.buttons', 'polymerAngular.ripple', 'polymerAngular.tabs']);
angular.module('polymerAngular.buttons', [])

        .constant('buttonConfig', {
            activeClass: 'active',
            toggleEvent: 'click'
        })

        .controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
                this.activeClass = buttonConfig.activeClass || 'active';
                this.toggleEvent = buttonConfig.toggleEvent || 'click';
            }])

        .directive('polyButton', function() {
            return {
                restrict: 'E',
                link: function(scope, element, attrs) {

                    var classattr = attrs.class;
                    var btnType = attrs.btntype;
                    var label = attrs.label;
                    var mode = attrs.mode;
                    var icon = attrs.icon;
                    var tag;
                    var Icontag;
                    if ((btnType !== null) && (btnType !== undefined) && (btnType !== '')) {
                        tag = btnType;
                        Icontag = btnType;
                    }
                    if ((icon !== null) && (icon !== undefined) && (icon !== '')) {
                        Icontag = Icontag + ' ' + 'icon=\"' + icon + '\"';
                    }
                    if ((mode !== null) && (mode !== undefined) && (mode !== '')) {
                        tag = tag + ' ' + mode;
                    }
                    if ((classattr !== null) && (classattr !== undefined) && (classattr !== '')) {
                        tag = tag + ' ' + 'class=\"' + classattr + '\"';
                        Icontag = Icontag + ' ' + 'class=\"' + classattr + '\"';
                    }
                    if ((label !== null) && (label !== undefined) && (label !== '')) {
                        tag = tag + ' ' + 'label=\"' + label + '\"';
                    }
                    var component;
                    if (mode != 'icon') {
                        component = "<paper-button " + tag + " ></paper-button>";
                    }
                    if (mode === 'icon') {
                        component = "<paper-icon-button " + Icontag + " ></paper-icon-button>";
                    }
                    element.append(component);
                }
            };
        })

angular.module('polymerAngular.ripple', [])
        .directive('polyRipple', function() {
            return {
                restrict: 'E',
                link: function(scope, element, attrs) {

                    var classattr = attrs.class;
                    var mode = attrs.mode;
                    var label = attrs.label;
                    var tag;
                    if ((mode !== null) && (mode !== undefined) && (mode !== '')) {
                        mode = mode;
                    }
                    var component;
                    if (mode === 'btn') {
                        component = "    <div class=\"button raised " + classattr + "\">" +
                                "<div class=\"center\" fit>" + label + "</div>" +
                                "<paper-ripple fit></paper-ripple>" +
                                "</div>";
                    }
                    element.append(component);
                }
            };
        })

angular.module('polymerAngular.generalattributes', [])
        .directive('action', function() {
            return {
                restrict: 'A',
                scope: true,
                link: function(scope, element, attrs) {
                    element.bind('click', function(e) {
                        alert('raise event');
                        attrs.action();
                    });
                }
            };
        })


angular.module('polymerAngular.tabs', [])

        .directive('polyTabs', function() {
            return {
                restrict: 'E',
                transclude: true,
                //replace: true,
                scope: {},
                controller: tabscontroller,
                link: tabslinker,
                template: tabsTemplate,
            };
        })

        .directive('polyTab', function() {
            return {
                require: '^polyTabs',
                restrict: 'E',
                //transclude: true,
                scope: {},
                link: function(scope, element, attrs, tabsCtrl) {
                    attrs.$set('index', tabsCtrl.getTabsSize());
                    tabsCtrl.addTab(attrs);
                },
                template:
                        '<div><paper-tab ></paper-tab></div>',
                //replace: true
            };
        })

var tabslinker = function(scope, element, attrs, tabsCtrl) {
    scope.tabClicked = function(tab) {
        scope.$parent.tabClicked(tab);
    };
}
var tabscontroller = function($scope) {
    var tabs = $scope.tabs = [];
    this.addTab = function(tab) {
        tabs.push(tab);
    }
    this.getTabsSize = function() {
        return tabs.length;
    }
}
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].name === obj) {
            return true;
        }
    }
    return false;
}
var tabsTemplate = function($scope) {
    var test = $scope;
    if (contains(test[0].attributes, 'noink')) {
        return "<div class='tabbable'>" +
                "<paper-tabs noink>" +
                "<paper-tab ng-repeat='tab in tabs' ng-click='tabClicked(tab)'>" +
                "{{tab.title}}" +
                "</paper-tab>" +
                "</paper-tabs>" +
                "<div class='tab-content' ng-transclude></div>" +
                "</div>";
    }else{
        return "<div class='tabbable'>" +
                "<paper-tabs ink>" +
                "<paper-tab ng-repeat='tab in tabs' ng-click='tabClicked(tab)'>" +
                "{{tab.title}}" +
                "</paper-tab>" +
                "</paper-tabs>" +
                "<div class='tab-content' ng-transclude></div>" +
                "</div>";
    }
}

