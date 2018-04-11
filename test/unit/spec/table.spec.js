import {
    createTest,
    createVue,
    destroyVM
} from '../util';
import Table from '../../../src/components/table/table';

const testData = [{
    id: 1,
    kind: "图集",
    title: "图集· 日光倾城",
    author: "Amanda",
    likes: 190
}, {
    id: 2,
    kind: "图集",
    title: "图集·军训，再见",
    author: "Rose",
    likes: 18
}, {
    id: 3,
    kind: "水墨",
    title: "乐在桂花节",
    author: "Elegenthus",
    likes: 189
}, {
    id: 4,
    kind: "新闻",
    title: "关于实施校园网运营服务模式改革相关情况的说明",
    author: "Cruyun",
    likes: 1001
}]

describe('Table', () => {
    describe('rendering data', () => {
        after(() => {
            destroyVM(vm);
          });
        const vm = createVue({
            data() {
                return {
                    testData: testData
                }
            },
            template: `
            <m-table :data="testData">
                <m-table-col prop="kind" label="分类"></m-table-col>
                <m-table-col prop="title" label="标题"></m-table-col>
                <m-table-col prop="author" label="作者"></m-table-col>
                <m-table-col prop="likes" label="浏览量"></m-table-col>
            </m-table>
          `,
        }, true);
        it('thead', () => {
            let ths = [].slice.call(vm.$el.querySelectorAll('thead th'))
            expect(ths.map(th => th.textContent)).to.eql(['分类', '标题', '作者', '浏览量'])
        })
        it('tbody', () => {
            let tds = [].slice.call(vm.$el.querySelectorAll('td'))
            let testDataArr = []
            testData.forEach(e => {
                Array.prototype.push.apply(testDataArr,[e.kind, e.title,e.author, e.likes.toString()]);
            })
            expect(tds.map(td => td.textContent)).to.eql(testDataArr)
        })
    })
    describe('Events',()=>{
        const vm = createTest({
            data() {
                return {
                    testData: testData
                }
            },
            template: `
            <m-table :data="testData">
                <m-table-col prop="kind" label="分类"></m-table-col>
                <m-table-col prop="title" label="标题"></m-table-col>
                <m-table-col prop="author" label="作者"></m-table-col>
                <m-table-col prop="likes" label="浏览量"></m-table-col>
                <m-table-col prop="active" label="操作">
                    <template scope="row">
                        <m-button type="error" :on-click="onclick.bind(this, row.index)">Delete</m-button>
                    </template>
                </m-table-col>
            </m-table>
          `,
        }, null,true)
        it.only('select a row',done=>{
            setTimeout(_ => {
                console.log(vm.$el.querySelector('.m-button'))
                done()
                // expect(vm.status === "clicked").to.be.true;
            })
        });
    })
})