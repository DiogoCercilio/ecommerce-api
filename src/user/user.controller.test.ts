import * as user_controller from "./user.controller"
// @ponicode
describe("getUser", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_controller.UserController()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getUser("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.getUser(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.getUser("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.getUser(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.getUser(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.getUser(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
