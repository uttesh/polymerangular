angular.module('polymerAngular', ['polymerAngular.buttons']);

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

                    var tag;

                    if ((btnType !== null) && (btnType !== undefined) && (btnType !== '')) {
                        tag = btnType;
                    }
                    if ((mode !== null) && (mode !== undefined) && (mode !== '')) {
                        tag = tag + ' ' + mode;
                    }
                    if ((classattr !== null) && (classattr !== undefined) && (classattr !== '')) {
                        tag = tag + ' ' + 'class=\"' + classattr + '\"';
                    }
                    if ((label !== null) && (label !== undefined) && (label !== '')) {
                        tag = tag + ' ' + 'label=\"' + label + '\"';
                    }

                    var component = "<paper-button " + tag + " ></paper-button>";

                    element.append(component);

                }
            };
        })