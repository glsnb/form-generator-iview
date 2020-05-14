/**
 * @file: Radio test case
 * @author: gls
 * @Date: 2020-05-14 16:10:00
 * @Last Modified by: gls
 * @Last Modified time: 2020-05-14 17:24:07
 */

import {expect} from 'chai';
import fieldRadio from '../../src/fields/fieldRadio';
import {mount} from '@vue/test-utils';

describe('fieldRadio', () => {
    const wrapper = mount(fieldRadio, {
        provide: {
            form: {
                model: {gender: 'M'}
            }
        },
        propsData: {
            field: {
                type: 'Radio',
                model: 'gender',
                options: [
                    {label: '男', value: 'M'},
                    {label: '女', value: 'F'},
                    {label: '保密', value: 'unknown', disabled: true}
                ]
            }
        }
    });

    it('the show markup', () => {
        expect(wrapper.find('radiogroup').isVisible()).to.equal(true)
    });

    it('emit radio on-change', async () => {
        wrapper.vm.$emit('on-change', 'F');
        // 等待事件处理完成
        await wrapper.vm.$nextTick();
        // 断言事件的数量
        expect(wrapper.emitted('on-change').length).to.equal(1);
        // 断言事件的有效数据
        expect(wrapper.emitted('on-change')[0]).to.deep.equal(['F']);
    });
});

describe('fieldRadioButton', () => {
    const wrapper = mount(fieldRadio, {
        provide: {
            form: {
                model: {gender: 'F'}
            }
        },
        propsData: {
            field: {
                type: 'Radio',
                model: 'gender',
                subtype: 'button',
                options: [
                    {label: '男', value: 'M'},
                    {label: '女', value: 'F'},
                    {label: '保密', value: 'unknown', disabled: true}
                ]
            }
        }
    });

    it('renders the correct type', () => {
        expect(wrapper.find('radiogroup').isVisible()).to.equal(true)
    });

    it('emit radio on-change', async () => {
        wrapper.vm.$emit('on-change', 'M');
        // 等待事件处理完成
        await wrapper.vm.$nextTick();
        // 断言事件的数量
        expect(wrapper.emitted('on-change').length).to.equal(1);
        // 断言事件的有效数据
        expect(wrapper.emitted('on-change')[0]).to.deep.equal(['M']);
    });
});
