export default class ClusterizeController {

  constructor($scope, $timeout, $compile, TrafficService) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$compile = $compile;
    this.TrafficService = TrafficService;
    this.progress = 0;
  }

  $onInit() {
    this.TrafficService.getData().then((data) => {
      this.rows = data.features;
      this.$timeout(() => {
        var clusterize = new Clusterize({
          scrollId: 'scrollArea',
          contentId: 'contentArea',
          callbacks: {
            scrollingProgress: progress => {
              this.progress = progress * 1.2347;
              this.$scope.$apply();
            }
          }
        });

        document.getElementById('contentArea').onclick = e => {
          e = e || event;
          var target = e.target || e.srcElement;
          if (target.nodeName != 'BUTTON') return;
          this.onButtonClick(e.target.getAttribute('data-click-attr'))
        }
      }, 0);
    });
  }

  onButtonClick(data) {
    this.$scope.$emit('item_title', data);
  }
}