/**
 * @file: LogicSelect test case
 * @author: gls
 * @Date: 2020-05-14 18:55:00
 * @Last Modified by: gls
 * @Last Modified time: 2020-05-14 19:19:09
 */

import {expect} from 'chai';
import fieldLogicInput from '../../src/fields/fieldLogicInput';
import fieldLogicSelect from '../../src/fields/fieldLogicSelect';
import {mount} from '@vue/test-utils';

describe('fieldLogicInput', () => {
    const wrapper = mount(fieldLogicInput, {
        provide: {
            form: {
                model: {
                    version: {
                        logic: 'betweenWith',
                        value: ['1.3', '2.1']
                    }
                }
            }
        },
        propsData: {
            field: {
                type: 'LogicInput',
                model: 'version',
                enables: ['betweenIn', 'betweenWith']
            }
        }
    });

    it('renders the correct classes', () => {
        expect(wrapper.classes()).contains('fg-ivu-logicinput');
    });

    it('model correct attributes value', () => {
        expect(wrapper.find('select').attributes('value')).to.equal('betweenWith');
    });

    it('emit logicinput on-change', async () => {
        wrapper.vm.$emit('on-change', '20');
        // 等待事件处理完成
        await wrapper.vm.$nextTick();
        // 断言事件的数量
        expect(wrapper.emitted('on-change').length).to.equal(1);
        // 断言事件的有效数据
        expect(wrapper.emitted('on-change')[0]).to.deep.equal(['20']);
    });
});

describe('fieldLogicSelect', () => {
    const wrapper = mount(fieldLogicSelect, {
        provide: {
            form: {
                model: {
                    version: {
                        logic: 'betweenIn',
                        value: ['1.0', '2.0']
                    }
                }
            }
        },
        propsData: {
            field: {
                type: 'LogicSelect',
                model: 'version',
                enables: ['betweenIn', 'betweenWith'],
                options: [
                    {
                        label: '1.0',
                        value: '1.0'
                    },
                    {
                        label: '2.0',
                        value: '2.0'
                    }
                ]
            }
        }
    });

    it('renders the correct classes', () => {
        expect(wrapper.classes()).contains('fg-ivu-logicselect');
    });

    it('model correct attributes value', () => {
        expect(wrapper.find('select').attributes('value')).to.equal('betweenIn');
    });

    it('emit logicinput on-change', async () => {
        wrapper.vm.$emit('on-change', '2.0');
        // 等待事件处理完成
        await wrapper.vm.$nextTick();
        // 断言事件的数量
        expect(wrapper.emitted('on-change').length).to.equal(1);
        // 断言事件的有效数据
        expect(wrapper.emitted('on-change')[0]).to.deep.equal(['2.0']);
    });
});
