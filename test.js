! function (e) {
    var t = {};

    function r(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = t, r.d = function (e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(i, n, function (t) {
                return e[t]
            }.bind(null, n));
        return i
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 4)
}([function (e, t) {
    e.exports = THREE
}, function (e, t, r) {
    "use strict";
    var i, n = "object" == typeof Reflect ? Reflect : null,
        o = n && "function" == typeof n.apply ? n.apply : function (e, t, r) {
            return Function.prototype.apply.call(e, t, r)
        };
    i = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function (e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : function (e) {
        return Object.getOwnPropertyNames(e)
    };
    var s = Number.isNaN || function (e) {
        return e != e
    };

    function a() {
        a.init.call(this)
    }
    e.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var l = 10;

    function h(e) {
        return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
    }

    function u(e, t, r, i) {
        var n, o, s, a;
        if ("function" != typeof r) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
        if (void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), s = o[t]), void 0 === s) s = o[t] = r, ++e._eventsCount;
        else if ("function" == typeof s ? s = o[t] = i ? [r, s] : [s, r] : i ? s.unshift(r) : s.push(r), (n = h(e)) > 0 && s.length > n && !s.warned) {
            s.warned = !0;
            var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = s.length, a = l, console && console.warn && console.warn(a)
        }
        return e
    }

    function c(e, t, r) {
        var i = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            n = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, o(this.listener, this.target, e))
            }.bind(i);
        return n.listener = r, i.wrapFn = n, n
    }

    function d(e, t, r) {
        var i = e._events;
        if (void 0 === i) return [];
        var n = i[t];
        return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? function (e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
            return t
        }(n) : p(n, n.length)
    }

    function f(e) {
        var t = this._events;
        if (void 0 !== t) {
            var r = t[e];
            if ("function" == typeof r) return 1;
            if (void 0 !== r) return r.length
        }
        return 0
    }

    function p(e, t) {
        for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
        return r
    }
    Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return l
        },
        set: function (e) {
            if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            l = e
        }
    }), a.init = function () {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, a.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    }, a.prototype.getMaxListeners = function () {
        return h(this)
    }, a.prototype.emit = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
        var i = "error" === e,
            n = this._events;
        if (void 0 !== n) i = i && void 0 === n.error;
        else if (!i) return !1;
        if (i) {
            var s;
            if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
            var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw a.context = s, a
        }
        var l = n[e];
        if (void 0 === l) return !1;
        if ("function" == typeof l) o(l, this, t);
        else {
            var h = l.length,
                u = p(l, h);
            for (r = 0; r < h; ++r) o(u[r], this, t)
        }
        return !0
    }, a.prototype.addListener = function (e, t) {
        return u(this, e, t, !1)
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (e, t) {
        return u(this, e, t, !0)
    }, a.prototype.once = function (e, t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.on(e, c(this, e, t)), this
    }, a.prototype.prependOnceListener = function (e, t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.prependListener(e, c(this, e, t)), this
    }, a.prototype.removeListener = function (e, t) {
        var r, i, n, o, s;
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        if (void 0 === (i = this._events)) return this;
        if (void 0 === (r = i[e])) return this;
        if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
        else if ("function" != typeof r) {
            for (n = -1, o = r.length - 1; o >= 0; o--)
                if (r[o] === t || r[o].listener === t) {
                    s = r[o].listener, n = o;
                    break
                }
            if (n < 0) return this;
            0 === n ? r.shift() : function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop()
            }(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, s || t)
        }
        return this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (e) {
        var t, r, i;
        if (void 0 === (r = this._events)) return this;
        if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
        if (0 === arguments.length) {
            var n, o = Object.keys(r);
            for (i = 0; i < o.length; ++i) "removeListener" !== (n = o[i]) && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof (t = r[e])) this.removeListener(e, t);
        else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
        return this
    }, a.prototype.listeners = function (e) {
        return d(this, e, !0)
    }, a.prototype.rawListeners = function (e) {
        return d(this, e, !1)
    }, a.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t)
    }, a.prototype.listenerCount = f, a.prototype.eventNames = function () {
        return this._eventsCount > 0 ? i(this._events) : []
    }
}, function (e, t, r) {
    e.exports = r.p + AudioFile
}, function (e, t, r) {
    e.exports = r.p + BackgroundFile
}, function (e, t, r) {
    e.exports = r(11)
}, function (e, t) {
    THREE.LuminosityHighPassShader = {
        shaderID: "luminosityHighPass",
        uniforms: {
            tDiffuse: {
                value: null
            },
            luminosityThreshold: {
                value: 1
            },
            smoothWidth: {
                value: 1
            },
            defaultColor: {
                value: new THREE.Color(0)
            },
            defaultOpacity: {
                value: 0
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform sampler2D tDiffuse;", "uniform vec3 defaultColor;", "uniform float defaultOpacity;", "uniform float luminosityThreshold;", "uniform float smoothWidth;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "vec3 luma = vec3( 0.299, 0.587, 0.114 );", "float v = dot( texel.xyz, luma );", "vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );", "float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );", "gl_FragColor = mix( outputColor, texel, alpha );", "}"].join("\n")
    }
}, function (e, t) {
    THREE.CopyShader = {
        uniforms: {
            tDiffuse: {
                value: null
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
    }
}, function (e, t) {
    var r, i, n;
    THREE.EffectComposer = function (e, t) {
        if (this.renderer = e, void 0 === t) {
            var r = {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    format: THREE.RGBAFormat,
                    stencilBuffer: !1
                },
                i = e.getSize(new THREE.Vector2);
            this._pixelRatio = e.getPixelRatio(), this._width = i.width, this._height = i.height, (t = new THREE.WebGLRenderTarget(this._width * this._pixelRatio, this._height * this._pixelRatio, r)).texture.name = "EffectComposer.rt1"
        } else this._pixelRatio = 1, this._width = t.width, this._height = t.height;
        this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], void 0 === THREE.CopyShader && console.error("THREE.EffectComposer relies on THREE.CopyShader"), void 0 === THREE.ShaderPass && console.error("THREE.EffectComposer relies on THREE.ShaderPass"), this.copyPass = new THREE.ShaderPass(THREE.CopyShader), this.clock = new THREE.Clock
    }, Object.assign(THREE.EffectComposer.prototype, {
        swapBuffers: function () {
            var e = this.readBuffer;
            this.readBuffer = this.writeBuffer, this.writeBuffer = e
        },
        addPass: function (e) {
            this.passes.push(e);
            var t = this.renderer.getDrawingBufferSize(new THREE.Vector2);
            e.setSize(t.width, t.height)
        },
        insertPass: function (e, t) {
            this.passes.splice(t, 0, e)
        },
        isLastEnabledPass: function (e) {
            for (var t = e + 1; t < this.passes.length; t++)
                if (this.passes[t].enabled) return !1;
            return !0
        },
        render: function (e) {
            void 0 === e && (e = this.clock.getDelta());
            var t, r, i = this.renderer.getRenderTarget(),
                n = !1,
                o = this.passes.length;
            for (r = 0; r < o; r++)
                if (!1 !== (t = this.passes[r]).enabled) {
                    if (t.renderToScreen = this.renderToScreen && this.isLastEnabledPass(r), t.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), t.needsSwap) {
                        if (n) {
                            var s = this.renderer.context;
                            s.stencilFunc(s.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), s.stencilFunc(s.EQUAL, 1, 4294967295)
                        }
                        this.swapBuffers()
                    }
                    void 0 !== THREE.MaskPass && (t instanceof THREE.MaskPass ? n = !0 : t instanceof THREE.ClearMaskPass && (n = !1))
                }
            this.renderer.setRenderTarget(i)
        },
        reset: function (e) {
            if (void 0 === e) {
                var t = this.renderer.getSize(new THREE.Vector2);
                this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, (e = this.renderTarget1.clone()).setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
            }
            this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
        },
        setSize: function (e, t) {
            this._width = e, this._height = t;
            var r = this._width * this._pixelRatio,
                i = this._height * this._pixelRatio;
            this.renderTarget1.setSize(r, i), this.renderTarget2.setSize(r, i);
            for (var n = 0; n < this.passes.length; n++) this.passes[n].setSize(r, i)
        },
        setPixelRatio: function (e) {
            this._pixelRatio = e, this.setSize(this._width, this._height)
        }
    }), THREE.Pass = function () {
        this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
    }, Object.assign(THREE.Pass.prototype, {
        setSize: function () {},
        render: function () {
            console.error("THREE.Pass: .render() must be implemented in derived pass.")
        }
    }), THREE.Pass.FullScreenQuad = (r = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), i = new THREE.PlaneBufferGeometry(2, 2), n = function (e) {
        this._mesh = new THREE.Mesh(i, e)
    }, Object.defineProperty(n.prototype, "material", {
        get: function () {
            return this._mesh.material
        },
        set: function (e) {
            this._mesh.material = e
        }
    }), Object.assign(n.prototype, {
        render: function (e) {
            e.render(this._mesh, r)
        }
    }), n)
}, function (e, t) {
    THREE.RenderPass = function (e, t, r, i, n) {
        THREE.Pass.call(this), this.scene = e, this.camera = t, this.overrideMaterial = r, this.clearColor = i, this.clearAlpha = void 0 !== n ? n : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1
    }, THREE.RenderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
        constructor: THREE.RenderPass,
        render: function (e, t, r) {
            var i, n, o = e.autoClear;
            e.autoClear = !1, this.scene.overrideMaterial = this.overrideMaterial, this.clearColor && (i = e.getClearColor().getHex(), n = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : r), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(i, n), this.scene.overrideMaterial = null, e.autoClear = o
        }
    })
}, function (e, t) {
    THREE.ShaderPass = function (e, t) {
        THREE.Pass.call(this), this.textureID = void 0 !== t ? t : "tDiffuse", e instanceof THREE.ShaderMaterial ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = THREE.UniformsUtils.clone(e.uniforms), this.material = new THREE.ShaderMaterial({
            defines: Object.assign({}, e.defines),
            uniforms: this.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader
        })), this.fsQuad = new THREE.Pass.FullScreenQuad(this.material)
    }, THREE.ShaderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
        constructor: THREE.ShaderPass,
        render: function (e, t, r) {
            this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = r.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e))
        }
    })
}, function (e, t) {
    THREE.UnrealBloomPass = function (e, t, r, i) {
        THREE.Pass.call(this), this.strength = void 0 !== t ? t : 1, this.radius = r, this.threshold = i, this.resolution = void 0 !== e ? new THREE.Vector2(e.x, e.y) : new THREE.Vector2(256, 256), this.clearColor = new THREE.Color(0, 0, 0);
        var n = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat
        };
        this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
        var o = Math.round(this.resolution.x / 2),
            s = Math.round(this.resolution.y / 2);
        this.renderTargetBright = new THREE.WebGLRenderTarget(o, s, n), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
        for (var a = 0; a < this.nMips; a++) {
            var l = new THREE.WebGLRenderTarget(o, s, n);
            l.texture.name = "UnrealBloomPass.h" + a, l.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(l);
            var h = new THREE.WebGLRenderTarget(o, s, n);
            h.texture.name = "UnrealBloomPass.v" + a, h.texture.generateMipmaps = !1, this.renderTargetsVertical.push(h), o = Math.round(o / 2), s = Math.round(s / 2)
        }
        void 0 === THREE.LuminosityHighPassShader && console.error("THREE.UnrealBloomPass relies on THREE.LuminosityHighPassShader");
        var u = THREE.LuminosityHighPassShader;
        this.highPassUniforms = THREE.UniformsUtils.clone(u.uniforms), this.highPassUniforms.luminosityThreshold.value = i, this.highPassUniforms.smoothWidth.value = .01, this.materialHighPassFilter = new THREE.ShaderMaterial({
            uniforms: this.highPassUniforms,
            vertexShader: u.vertexShader,
            fragmentShader: u.fragmentShader,
            defines: {}
        }), this.separableBlurMaterials = [];
        var c = [3, 5, 7, 9, 11];
        for (o = Math.round(this.resolution.x / 2), s = Math.round(this.resolution.y / 2), a = 0; a < this.nMips; a++) this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[a])), this.separableBlurMaterials[a].uniforms.texSize.value = new THREE.Vector2(o, s), o = Math.round(o / 2), s = Math.round(s / 2);
        this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = .1, this.compositeMaterial.needsUpdate = !0;
        this.compositeMaterial.uniforms.bloomFactors.value = [1, .8, .6, .4, .2], this.bloomTintColors = [new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, void 0 === THREE.CopyShader && console.error("THREE.UnrealBloomPass relies on THREE.CopyShader");
        var d = THREE.CopyShader;
        this.copyUniforms = THREE.UniformsUtils.clone(d.uniforms), this.copyUniforms.opacity.value = 1, this.materialCopy = new THREE.ShaderMaterial({
            uniforms: this.copyUniforms,
            vertexShader: d.vertexShader,
            fragmentShader: d.fragmentShader,
            blending: THREE.AdditiveBlending,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }), this.enabled = !0, this.needsSwap = !1, this.oldClearColor = new THREE.Color, this.oldClearAlpha = 1, this.basic = new THREE.MeshBasicMaterial, this.fsQuad = new THREE.Pass.FullScreenQuad(null)
    }, THREE.UnrealBloomPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
        constructor: THREE.UnrealBloomPass,
        dispose: function () {
            for (var e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
            for (e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
            this.renderTargetBright.dispose()
        },
        setSize: function (e, t) {
            var r = Math.round(e / 2),
                i = Math.round(t / 2);
            this.renderTargetBright.setSize(r, i);
            for (var n = 0; n < this.nMips; n++) this.renderTargetsHorizontal[n].setSize(r, i), this.renderTargetsVertical[n].setSize(r, i), this.separableBlurMaterials[n].uniforms.texSize.value = new THREE.Vector2(r, i), r = Math.round(r / 2), i = Math.round(i / 2)
        },
        render: function (e, t, r, i, n) {
            this.oldClearColor.copy(e.getClearColor()), this.oldClearAlpha = e.getClearAlpha();
            var o = e.autoClear;
            e.autoClear = !1, e.setClearColor(this.clearColor, 0), n && e.context.disable(e.context.STENCIL_TEST), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = r.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = r.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
            for (var s = this.renderTargetBright, a = 0; a < this.nMips; a++) this.fsQuad.material = this.separableBlurMaterials[a], this.separableBlurMaterials[a].uniforms.colorTexture.value = s.texture, this.separableBlurMaterials[a].uniforms.direction.value = THREE.UnrealBloomPass.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[a]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[a].uniforms.colorTexture.value = this.renderTargetsHorizontal[a].texture, this.separableBlurMaterials[a].uniforms.direction.value = THREE.UnrealBloomPass.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[a]), e.clear(), this.fsQuad.render(e), s = this.renderTargetsVertical[a];
            this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, n && e.context.enable(e.context.STENCIL_TEST), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(r), this.fsQuad.render(e)), e.setClearColor(this.oldClearColor, this.oldClearAlpha), e.autoClear = o
        },
        getSeperableBlurMaterial: function (e) {
            return new THREE.ShaderMaterial({
                defines: {
                    KERNEL_RADIUS: e,
                    SIGMA: e
                },
                uniforms: {
                    colorTexture: {
                        value: null
                    },
                    texSize: {
                        value: new THREE.Vector2(.5, .5)
                    },
                    direction: {
                        value: new THREE.Vector2(.5, .5)
                    }
                },
                vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                fragmentShader: "#include <common>\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat fSigma = float(SIGMA);\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\t\t\t\t\t\tfloat x = float(i);\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\t\t\t\t\t\tweightSum += 2.0 * w;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"
            })
        },
        getCompositeMaterial: function (e) {
            return new THREE.ShaderMaterial({
                defines: {
                    NUM_MIPS: e
                },
                uniforms: {
                    blurTexture1: {
                        value: null
                    },
                    blurTexture2: {
                        value: null
                    },
                    blurTexture3: {
                        value: null
                    },
                    blurTexture4: {
                        value: null
                    },
                    blurTexture5: {
                        value: null
                    },
                    dirtTexture: {
                        value: null
                    },
                    bloomStrength: {
                        value: 1
                    },
                    bloomFactors: {
                        value: null
                    },
                    bloomTintColors: {
                        value: null
                    },
                    bloomRadius: {
                        value: 0
                    }
                },
                vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                fragmentShader: "varying vec2 vUv;\t\t\t\tuniform sampler2D blurTexture1;\t\t\t\tuniform sampler2D blurTexture2;\t\t\t\tuniform sampler2D blurTexture3;\t\t\t\tuniform sampler2D blurTexture4;\t\t\t\tuniform sampler2D blurTexture5;\t\t\t\tuniform sampler2D dirtTexture;\t\t\t\tuniform float bloomStrength;\t\t\t\tuniform float bloomRadius;\t\t\t\tuniform float bloomFactors[NUM_MIPS];\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\t\t\t\t\t\t\t\tfloat lerpBloomFactor(const in float factor) { \t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\t\t\t\t}\t\t\t\t\t\t\t\tvoid main() {\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture2, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\t\t\t\t}"
            })
        }
    }), THREE.UnrealBloomPass.BlurDirectionX = new THREE.Vector2(1, 0), THREE.UnrealBloomPass.BlurDirectionY = new THREE.Vector2(0, 1)
}, function (e, t, r) {
    "use strict";

    function i(e, t) {
        return e + (Math.random() - .5) * t
    }
    r.r(t);
    var n = r(0),
        o = function () {
            function e(e, t, r, o, s, a, l, h, u) {
                var c, d;
                this.rotate = 360 * Math.random(), this.id = Math.random(), this.panelOpacity = .1, this.rotateSpeed = s, this.angle = r, this.speed = o, this.center = t, this.onDelete = u, this.distance = h.startShow, this.showDistance = h, this.panelMaterial = (new n.MeshBasicMaterial).copy(a), this.panelMaterial.transparent = !0, this.lineMaterial = (new n.LineBasicMaterial).copy(l), this.lineMaterial.transparent = !0;
                var f = new n.Geometry,
                    p = new n.Geometry,
                    m = [new n.Vector3(i(e, e / 2), i(e, e / 2), 0), new n.Vector3(-1 * i(e, e / 2), i(e, e / 2), 0), new n.Vector3(-1 * i(e, e / 2), -1 * i(e, e / 2), 0)];
                (c = f.vertices).push.apply(c, m), (d = p.vertices).push.apply(d, m.concat([m[0]])), f.faces.push(new n.Face3(0, 1, 2)), f.computeFaceNormals(), f.computeVertexNormals(), this.line = new n.Line(p, this.lineMaterial), this.mesh = new n.Mesh(f, this.panelMaterial), this.group = new n.Group, this.translateOnAxis(this.translate(this.distance), 1), this.group.add(this.line), this.group.add(this.mesh), this.rotateZ(this.rotate), this.updatePosition(0)
            }
            return e.prototype.rotateZ = function (e) {
                this.mesh.geometry.rotateZ(e), this.line.geometry.rotateZ(e)
            }, e.prototype.translate = function (e) {
                var t = Math.cos(this.angle * Math.PI / 180) * e,
                    r = Math.sin(this.angle * Math.PI / 180) * e;
                return new n.Vector3(t, r, 0)
            }, e.prototype.translateOnAxis = function (e, t) {
                this.group.translateOnAxis(e, t)
            }, e.prototype.updatePosition = function (e) {
                this.translateOnAxis(this.translate(e * this.speed), 1), this.distance += e * this.speed, this.rotateZ(this.rotateSpeed * e), this.panelMaterial.opacity = this.opacity(this.distance, this.showDistance) * this.panelOpacity, this.lineMaterial.opacity = this.opacity(this.distance, this.showDistance), this.distance > this.showDistance.endHide && this.delete()
            }, e.prototype.delete = function () {
                this.onDelete(this), this.mesh.geometry.dispose(), this.line.geometry.dispose()
            }, e.prototype.opacity = function (e, t) {
                return this.distance < t.endShow ? (this.distance - t.startShow) / (t.endShow - t.startShow) : this.distance > t.startHide ? (t.endHide - this.distance) / (t.endHide - t.startHide) : 1
            }, e.prototype.transition = function (e) {
                this.updatePosition(e)
            }, e
        }();

    function s(e, t, r, i) {
        void 0 === r && (r = 1), void 0 === i && (i = !1);
        for (var n = -1, o = Math.max(Math.ceil((t - e) / r), 0), s = Array(o); o--;) s[i ? o : ++n] = e, e += r;
        return s
    }
    var a, l = function () {
            function e(e, t, r) {
                this.lastStrength = 0, this.theStrength = 0, this.targetRange = 0, this._range = 0, this.baseRange = e, this.angle = t, this.center = r
            }
            return Object.defineProperty(e.prototype, "positionA", {
                get: function () {
                    var e = this._range + this.baseRange,
                        t = Math.cos(this.angle * Math.PI / 180) * e,
                        r = Math.sin(this.angle * Math.PI / 180) * e;
                    return new n.Vector2(this.center.x + t, this.center.y + r)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "positionB", {
                get: function () {
                    var e = -1 * this._range + this.baseRange,
                        t = Math.cos(this.angle * Math.PI / 180) * e,
                        r = Math.sin(this.angle * Math.PI / 180) * e;
                    return new n.Vector2(this.center.x + t, this.center.y + r)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "strength", {
                set: function (e) {
                    this.lastStrength = this.theStrength, this.theStrength = e, this.targetRange = Math.max(this.theStrength - this.lastStrength, 0), this.targetRange > this._range && (this._range = this.targetRange)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.transition = function (e) {
                this._range = Math.max(this._range - e * this._range * 5, 0)
            }, e
        }(),
        h = r(1),
        u = (a = function (e, t) {
            return (a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
        }, function (e, t) {
            function r() {
                this.constructor = e
            }
            a(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }),
        c = function (e) {
            function t(t) {
                void 0 === t && (t = {});
                var r = e.call(this) || this;
                return r.listener = new n.AudioListener, r.sound = new n.Audio(r.listener), r.audioLoader = new n.AudioLoader, r.analyser = new n.AudioAnalyser(r.sound, t.fftsize || 256), r.frequencyBinCount = r.analyser.analyser.frequencyBinCount, r
            }
            return u(t, e), t.prototype.load = function (e) {
                var t = this,
                    r = e.src,
                    i = e.onLoad,
                    n = void 0 === i ? function (e) {} : i,
                    o = e.onPrgress,
                    s = void 0 === o ? function (e) {} : o,
                    a = e.onError,
                    l = void 0 === a ? function () {} : a;
                this.audioLoader.load(r, function (e) {
                    return t.sound.setBuffer(e), t.sound.setLoop(!0), t.sound.play(), n(e)
                }, s, l)
            }, t.prototype.setVolume = function (e) {
                this.sound.setVolume(e);
                this.sound.volume = e;
            }, t.prototype.play_pause = function (e) {
                if (e) {
                    this.sound.play();
                } else {
                    this.sound.pause();
                }
            }, t.prototype.force_play = function () {
                this.sound.pause();
                this.sound.play();
                this.sound.id = "audioPlayuerasdasdasd"
            }, t.prototype.getFrequencyData = function () {
                return this.analyser.getFrequencyData()
            }, t
        }(h.EventEmitter),
        d = Object.assign(n, {}),
        f = (r(5), r(6), r(7), r(8), r(9), r(10), function () {
            function e(e) {
                var t = this;
                void 0 === e && (e = {}), this.scale = 1, this.Triangles = [];
                var r = e.width,
                    i = void 0 === r ? window.innerWidth : r,
                    n = e.height,
                    o = void 0 === n ? window.innerHeight : n,
                    a = e.subdivisionSize,
                    h = void 0 === a ? 1024 : a,
                    u = e.cutFront,
                    f = void 0 === u ? 0 : u,
                    p = e.cutEnd,
                    m = void 0 === p ? 0 : p;
                this.cutFront = f, this.cutEnd = m;
                var v = new d.WebGLRenderer({
                    canvas: e.view,
                    alpha: !0,
                    antialias: !0
                });
                v.setSize(i, o);
                var g = new d.PerspectiveCamera(45, i / o, 1, 500);
                g.position.set(0, 0, 100), g.lookAt(new d.Vector3(0, 0, 0));
                var T = new d.Scene;
                this.composer = new d.EffectComposer(v), this.composer.setSize(i, o);
                var E = new d.RenderPass(T, g);
                this.composer.addPass(E), this.bloomPass = new d.UnrealBloomPass(new d.Vector2(window.innerWidth, window.innerHeight), 1.5, .2, 0), this.composer.addPass(this.bloomPass);
                var y = new d.ShaderPass(d.CopyShader);
                y.renderToScreen = !0, this.composer.addPass(y), this.scene = T, this.camera = g, this.audio = new c({
                    fftsize: h
                });
                var w = this.loadAudio(h).frequencyBinCount,
                    b = new d.LineBasicMaterial({
                        color: ColorWawe
                    }),
                    x = w - m - f;
                this.nodes = s(0, x).map(function (e) {
                    return new l(20, (e / x * 360 + 45) % 360, new d.Vector2(0, 0))
                }), this.lineA = new d.Line((new d.BufferGeometry).addAttribute("position", this.renderGeometries(this.nodes.map(function (e) {
                    return e.positionA
                })).setDynamic(!0)), b), this.lineB = new d.Line((new d.BufferGeometry).addAttribute("position", this.renderGeometries(this.nodes.map(function (e) {
                    return e.positionB
                })).setDynamic(!0)), b), this.lines = s(0, x).map(function (e) {
                    return new d.Line((new d.BufferGeometry).addAttribute("position", t.renderGeometries([t.nodes[e].positionA, t.nodes[e].positionB]).setDynamic(!0)), b)
                }), this.lineGroup = this.loadLine(), this.TriangleGroup = this.loadTriangle(), this.scene.add(this.TriangleGroup), this.scene.add(this.lineGroup), this.renderer = v, this.clock = new d.Clock, this.render(), this.resize(i, o)
            }
            return e.prototype.loadGui = function () {
                var e = this,
                    t = {
                        projection: "normal",
                        background: !1,
                        exposure: 1,
                        bloomStrength: 1.5,
                        bloomThreshold: .2,
                        bloomRadius: 0
                    },
                    r = new window.dat.GUI;
                r.add(t, "exposure", .1, 2), r.add(t, "bloomThreshold", 0, 1).onChange(function (t) {
                    e.bloomPass.threshold = Number(t)
                }), r.add(t, "bloomStrength", 0, 3).onChange(function (t) {
                    e.bloomPass.strength = Number(t)
                }), r.add(t, "bloomRadius", 0, 1).onChange(function (t) {
                    e.bloomPass.radius = Number(t)
                }), r.open()
            }, e.prototype.resize = function (e, t) {
                this.camera.aspect = e / t, this.camera.fov = e <= 425 ? 70 : 45, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t), this.composer.setSize(e, t)
            }, e.prototype.loadLine = function () {
                var e = new d.Group;
                return e.add(this.lineB), e.add(this.lineA), this.lines.forEach(function (t) {
                    return e.add(t)
                }), e
            }, e.prototype.loadAudio = function (e) {
                return this.camera.add(this.audio.listener), this.audio
            }, e.prototype.loadTriangle = function () {
                var e = new d.Group,
                    t = new d.MeshBasicMaterial({
                        color: ColorWawe
                    }),
                    r = new d.LineBasicMaterial({
                        color: ColorWawe
                    });
                return setInterval(this.addTriangle.bind(this, t, r), 500), e
            }, e.prototype.addTriangle = function (e, t) {
                var r = this;
                void 0 === e && (e = new d.MeshBasicMaterial({
                    color: ColorWawe
                })), void 0 === t && (t = new d.LineBasicMaterial({
                    color: ColorWawe
                }));
                var i = this.makeTriangle(e, t, function (e) {
                    r.Triangles = r.Triangles.filter(function (t) {
                        return t !== e
                    }), r.TriangleGroup.remove(e.group)
                });
                this.TriangleGroup.add(i.group), this.Triangles.push(i)
            }, e.prototype.makeTriangle = function (e, t, r) {
                return void 0 === e && (e = new d.MeshBasicMaterial({
                    color: ColorWawe
                })), void 0 === t && (t = new d.LineBasicMaterial({
                    color: ColorWawe
                })), new o(2, new d.Vector3(0, 0, 0), 360 * Math.random(), i(5, 1), i(.1, .02), e, t, {
                    startShow: 15,
                    endShow: 30,
                    startHide: 60,
                    endHide: 70
                }, r)
            }, e.prototype.renderGeometries = function (e) {
                var t = [];
                return (e = e.concat(e[0])).forEach(function (e) {
                    t.push(e.x, e.y, 0)
                }), new d.BufferAttribute(new Float32Array(t), 3)
            }, e.prototype.updateGeometries = function () {
                var e = this;
                if (this.nodes) {
                    this.lineGroup.scale.set(this.scale, this.scale, this.scale);
                    var t = this.lineA.geometry.getAttribute("position"),
                        r = this.lineB.geometry.getAttribute("position"),
                        i = this.nodes.map(function (e) {
                            return [e.positionA, e.positionB]
                        });
                    i.forEach(function (i, n) {
                        t.set([i[0].x, i[0].y], 3 * n), r.set([i[1].x, i[1].y], 3 * n);
                        var o = e.lines[n].geometry.getAttribute("position");
                        o.set([i[0].x, i[0].y, 0, i[1].x, i[1].y, 0], 0), o.needsUpdate = !0
                    }), t.set([t.array[0], t.array[1]], 3 * i.length), r.set([r.array[0], r.array[1]], 3 * i.length), t.needsUpdate = !0, r.needsUpdate = !0
                }
            }, e.prototype.render = function () {
                this.composer.render();
                var e = this.audio.getFrequencyData(),
                    t = this.clock.getDelta(),
                    r = e.slice(this.cutFront, e.length - this.cutEnd);
                this.nodes.forEach(function (e, i, n) {
                    e.strength = .1 * r[i % n.length], e.transition(t)
                }), this.scale = 1 + e[Math.ceil(.05 * e.length)] / 1e3, this.updateGeometries(), this.Triangles.forEach(function (e) {
                    return e.transition(t)
                }), requestAnimationFrame(this.render.bind(this))
            }, e
        }()),
        p = r(2),
        m = r.n(p),
        v = r(3),
        g = r.n(v),
        T = new f({
            view: document.getElementById("app"),
            subdivisionSize: 1024,
            cutEnd: 256
        });



    T.audio.load({
        src: m.a,
        onPrgress: function (e) {
            console.log(e.loaded / e.total * 100 + "% loaded")
        }
    });


    $('#volume').val(AudioVolume);
    T.audio.setVolume(AudioVolume);

    $(document).on('input change', '#volume', function () {
        T.audio.setVolume($(this).val());
    });

    $("#avvio").click(function () {

        if ($(this).attr('data-info') == '1') {
            $("#avvio").attr('data-info', '0');
            $("#avvio").html('<i class="far fa-play-circle"></i>');
            T.audio.play_pause(false);
        } else {
            $("#avvio").attr('data-info', '1');
            $("#avvio").html('<i class="far fa-pause-circle"></i>');
            T.audio.play_pause(true);
        }


    });


    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        //tasto +
        if (keycode == '43') {
            var new_volume = $('#volume').val();
            new_volume = (new_volume * 100 + 0.01 * 100) / 100;

            if (new_volume > 1 || new_volume == 1) {
                new_volume = 1
            }

            $('#volume').val(new_volume);
            T.audio.setVolume(new_volume);
        }
        //tasto -
        if (keycode == '45') {
            var new_volume = $('#volume').val();
            new_volume = (new_volume * 100 - 0.01 * 100) / 100;

            if (new_volume < 0 || new_volume == 0) {
                new_volume = 0
            }

            $('#volume').val(new_volume);
            T.audio.setVolume(new_volume);
        }
        //tasto SPACE
        if (keycode == '32') {
            if ($("#avvio").attr('data-info') == '1') {
                $("#avvio").attr('data-info', '0');
                $("#avvio").html('<i class="far fa-play-circle"></i>');
                T.audio.play_pause(false);
            } else {
                $("#avvio").attr('data-info', '1');
                $("#avvio").html('<i class="far fa-pause-circle"></i>');
                T.audio.play_pause(true);
            }
        }
    });


    window.addEventListener("resize", function () {
        T.resize(window.innerWidth, window.innerHeight);
    });

    if (!UseVideo) {
        var E = document.getElementById("bg_alt");
        E && (E.style.backgroundImage = "url('" + BackgroundFile + "')");
    } else {
        var E = document.getElementById("bg");
        E && (E.style.backgroundImage = "url('grid.png')");
    }


    var E_alt = document.getElementById("logo");
    E_alt && (E_alt.style.backgroundImage = "url('" + img_logo1 + "')");

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    if (!audioContext) {
        console.error("Web Audio API is not supported");
    } else {
        const analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaElementSource(this.sound);

        if (!source) {
            console.error("Error creating media element source");
        } else {
            source.connect(analyser);
            analyser.connect(audioContext.destination);
            analyser.fftSize = 256;

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            // Define the range of bass frequencies (adjust as needed)
            const bassStart = 80;
            const bassEnd = 99;

            // Threshold for filtering out small vibrations
            const vibrationThreshold = 75;

            const pulsingImage = document.getElementById('logo');

            function renderFrame() {
                analyser.getByteFrequencyData(dataArray);

                // Extract the bass frequencies
                const bassArray = dataArray.slice(bassStart, bassEnd);

                // Calculate the average amplitude for bass frequencies
                const bassAmplitude = bassArray.reduce((acc, val) => acc + val, 0) / bassArray.length;

                if (bassAmplitude > vibrationThreshold) {
                    const scale = 1 + (bassAmplitude - vibrationThreshold) / 500;
                    pulsingImage.style.transform = `scale(${scale})`;
                }

                requestAnimationFrame(renderFrame);
            }
        }
    }
}]);
