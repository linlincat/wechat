import dataUtil from "../core/utils/data-util";
Component({
  relations: {
    "../grid/index": {
      type: "parent"
    }
  },
  externalClasses: ["l-grid-item", "l-grid-item-class"],
  properties: {
    key: String,
    cell: {
      type: Object,
      value: {}
    }
  },
  data: {
    index: 0,
    isHover: !0
  },
  attached() {},
  observers: {
    key: function () {
      const t = this.getRelationNodes("../grid/index")[0];
      t &&
        (t.setData({
          gridItems: [],
          childNum: 0
        }), t.initGrids())
    }
  },
  lifetimes: {
    ready() {
      const t = this.getRelationNodes("../grid/index")[0];
      t
        &&
        dataUtil.setDiffData(this, {
          isHover: t.data.isHover
        })
    }
  },
  methods: {
    tapGridItem() {
      this.triggerEvent("linitemtap", {
        ...this.data
      }, {
        bubbles: !0,
        composed: !0
      })
    }
  }
});