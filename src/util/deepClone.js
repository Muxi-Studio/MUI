// function deepClone(vnode, createElement) {
//     function cloneVNode(vnode) {
//         const clonedChildren = vnode.children && vnode.children.map(vnode => cloneVNode(vnode))
//         const cloned = createElement(vnode.tag, vnode.data, clonedChildren)
//         cloned.text = vnode.text
//         cloned.isComment = vnode.isComment
//         cloned.componentOptions = vnode.componentOptions
//         cloned.elm = vnode.elm
//         cloned.context = vnode.context
//         cloned.ns = vnode.ns
//         cloned.isStatic = vnode.isStatic
//         cloned.key = vnode.key
//         return cloned
//     }
//     return cloneVNode(vnode)
// }

// module.exports = deepClone
