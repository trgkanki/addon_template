import Vue from 'vue'
import DlgLoader from './DlgLoader.vue'

export interface VueDlgHandle {
  close(): void;
}

export function openVueDialog (dlgClass: any, props?: object): VueDlgHandle {
  const vm = new Vue({
    render: h => h(DlgLoader, {
      props: { dlgClass, ...props },
      on: {
        close: closeInstance
      }
    })
  })

  // Lifecycle controller
  let instanceAlive = true
  function closeInstance () {
    if (instanceAlive) {
      vm.$destroy()
      instanceAlive = false
      container.$el.remove()
    }
  }

  // Mount
  const container = vm.$mount()
  document.body.appendChild(container.$el)

  return {
    close: closeInstance
  }
}
