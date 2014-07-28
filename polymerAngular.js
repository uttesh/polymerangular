angular.module('polymerAngular', ['polymerAngular.buttons', 'polymerAngular.ripple']);

angular.module('polymerAngular.buttons', [])

        .constant('buttonConfig', {
            activeClass: 'active',
            toggleEvent: 'click'
        })

        .controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
                this.activeClass = buttonConfig.activeClass || 'active';
                this.toggleEvent = buttonConfig.toggleEvent || 'click';
            }])

        .directive('paButton', function() {
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
        .directive('paRipple', function() {
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

