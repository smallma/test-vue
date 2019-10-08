export const UserMixin = {
  methods: {
    getUserInfo2: function(username2) {
      console.log('this.userId: ', this.userId);
      this.userId = this.username2 + ':' + this.userId;
    }
  }
}



// export const stateableMixin = {
//   props: ['type','loading']
// }

// export const closableMixin = {
//   props: {
//     isOpen: {
//       default: true
//     }
//   },
//   methods: {
//     hide: function() {
//       this.shown = false;
//     },
//     show: function() {
//       this.shown = true;
//     },
//     toggle: function() {
//       this.shown = !this.shown;
//     },
//     getUserInfo2: function () {
//       setTimeout(() => {
//         console.log('this.userId: ', this.userId);
//       }, 2000);
//     }
//   }
// }
