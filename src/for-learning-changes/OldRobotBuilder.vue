<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div :class="[saleBorderClass, 'top', 'part']">
        <!-- /*v-once makes it render only once*/ -->
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <!-- v-show will render it and just place a hidden style -->
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img :src="selectedRobot.head.src" title="head" />
        <button @:click="selectPrevHead()" class="prev-selector">
          &#9668;
        </button>
        <button @:click="selectNextHead()" class="next-selector">
          &#9658;
        </button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <div class="robot-name">
          {{ selectedRobot.leftArm.name }}
        </div>
        <img :src="selectedRobot.leftArm.src" title="left arm" />
        <button @:click="selectLeftNextArm()" class="prev-selector">
          &#9650;
        </button>
        <button @:click="selectLeftPrevArm()" class="next-selector">
          &#9660;
        </button>
      </div>
      <div class="center part">
        <div class="robot-name">
          {{ selectedRobot.torso.name }}
        </div>
        <img :src="selectedRobot.torso.src" title="left arm" />
        <button @:click="selectNextTorso()" class="prev-selector">
          &#9668;
        </button>
        <button @:click="selectPrevTorso()" class="next-selector">
          &#9658;
        </button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="left arm" />
        <button @:click="selectNextRightArm()" class="prev-selector">
          &#9650;
        </button>
        <button @:click="selectPrevRightArm()" class="next-selector">
          &#9660;
        </button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="left arm" />
        <button @:click="selectNextBase()" class="prev-selector">
          &#9668;
        </button>
        <button @:click="selectPrevBase()" class="next-selector">
          &#9658;
        </button>
      </div>
    </div>
    <div>
      <h1 class="cart">Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{ robot.head.title }}</td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from "../data/parts";
import createdHookMixin from "./created-hook-mixin";
export default {
  name: "RobotBuilder",
  data() {
    return {
      availableParts,
      cart: [],
      // selected parts indexes
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedRightArmIndex: 1,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0,
    };
  },
  mixins: [createdHookMixin],
  computed: {
    saleBorderClass() {
      if (this.selectedRobot.head.onSale) {
        return "sale-border";
      }
      return "";
    },
    headBorderStyle() {
      if (this.selectedRobot.head.onSale) {
        return {
          border: "3px solid red",
        };
      }
      return { border: "3px solid #aaa" };
    },
    selectedRobot() {
      return {
        head: this.availableParts.heads[this.selectedHeadIndex],
        leftArm: this.availableParts.arms[this.selectedLeftArmIndex],
        rightArm: this.availableParts.arms[this.selectedRightArmIndex],
        torso: this.availableParts.torsos[this.selectedTorsoIndex],
        base: this.availableParts.bases[this.selectedBaseIndex],
      };
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.base.cost +
        robot.torso.cost;
      this.cart.push(Object.assign({}, robot, { cost }));
    },
    selectNextRightArm() {
      if (this.selectedRightArmIndex >= this.availableParts.arms.length - 1) {
        this.selectedRightArmIndex = 0;
        return;
      }
      this.selectedRightArmIndex++;
    },
    selectPrevRightArm() {
      if (this.selectedRightArmIndex <= 0) {
        this.selectedRightArmIndex = this.availableParts.arms.length - 1;
        return;
      }
      this.selectedRightArmIndex--;
    },
    selectNextHead() {
      if (this.selectedHeadIndex >= this.availableParts.heads.length - 1) {
        this.selectedHeadIndex = 0;
        return;
      }
      this.selectedHeadIndex++;
    },
    selectPrevHead() {
      if (this.selectedHeadIndex <= 0) {
        this.selectedHeadIndex = this.availableParts.heads.length - 1;
        return;
      }
      this.selectedHeadIndex--;
    },
    selectLeftNextArm() {
      if (this.selectedLeftArmIndex >= this.availableParts.arms.length - 1) {
        this.selectedLeftArmIndex = 0;
        return;
      }
      this.selectedLeftArmIndex++;
    },
    selectLeftPrevArm() {
      if (this.selectedLeftArmIndex <= 0) {
        this.selectedLeftArmIndex = this.availableParts.arms.length - 1;
        return;
      }
      this.selectedLeftArmIndex--;
    },
    selectNextTorso() {
      if (this.selectedTorsoIndex >= this.availableParts.torsos.length - 1) {
        this.selectedTorsoIndex = 0;
        return;
      }
      this.selectedTorsoIndex++;
    },
    selectPrevTorso() {
      if (this.selectedTorsoIndex <= 0) {
        this.selectedTorsoIndex = this.availableParts.torsos.length - 1;
        return;
      }
      this.selectedTorsoIndex--;
    },
    selectNextBase() {
      if (this.selectedBaseIndex >= this.availableParts.bases.length - 1) {
        this.selectedBaseIndex = 0;
        return;
      }
      this.selectedBaseIndex++;
    },
    selectPrevBase() {
      if (this.selectedBaseIndex <= 0) {
        this.selectedBaseIndex = this.availableParts.bases.length - 1;
        return;
      }
      this.selectedBaseIndex--;
    },
  },
};
</script>

<style lang="scss" scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part {
  img {
    width: 165px;
  }
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.sale-border {
  border: 3px solid red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  width: 220px;
  right: 30px;
  padding: 3px;
  font-size: 16px;
}
td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.cart {
  text-align: left;
}
</style>
