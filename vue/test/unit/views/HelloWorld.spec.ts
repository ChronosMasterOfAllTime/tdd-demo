import HelloWorld from '@/views/HelloWorld.vue'
import { mountComponent } from '@test/unit/testhelper'
import { VueWrapper } from '@vue/test-utils'
import { NButton } from 'naive-ui'
import { ComponentPublicInstance } from 'vue'

describe('HelloWorld.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance<typeof HelloWorld>>
  beforeEach(() => {
    wrapper = mountComponent<InstanceType<typeof HelloWorld>>(HelloWorld, {
      props: { msg: 'foo bar' }
    })
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  test('should mount', () => {
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true)
  })

  const clickCount = 60

  test(`should disable button after ${clickCount} clicks and display different messages`, async () => {
    const nButton: VueWrapper<InstanceType<typeof NButton>> =
      wrapper.findComponent(NButton)

    expect(nButton.exists()).toBe(true)
    expect(nButton.attributes().disabled).toBe('false')

    for (let i = 0; i < clickCount + 1; i++) {
      ;(nButton.element as HTMLButtonElement).click()
      await wrapper.vm.$nextTick()
      if (i - 1 === 50) expect(nButton.text()).toBe('Uh-oh')
      if (i - 1 === 30) expect(nButton.text()).toBe('Slow Down..')
      if (i - 1 === 20) expect(nButton.text()).toBe('Woah there, buddy..')
      if (i - 1 === 10) expect(nButton.text()).toBe('Great Job!')
    }

    expect(nButton.attributes().disabled).toBe('true')
    expect(nButton.text()).toBe(`It's Broken!`)
  })
})

// solution

// if (i - 1 === 20) expect(nButton.text()).toBe('Woah there, buddy...')
