(() => {
  var e,
    t = {
      5413: e => {
        'use strict';
        e.exports = function (e) {
          if (e.length >= 255) throw new TypeError('Alphabet too long');
          for (var t = new Uint8Array(256), r = 0; r < t.length; r++)
            t[r] = 255;
          for (var n = 0; n < e.length; n++) {
            var i = e.charAt(n),
              o = i.charCodeAt(0);
            if (255 !== t[o]) throw new TypeError(i + ' is ambiguous');
            t[o] = n;
          }
          var s = e.length,
            a = e.charAt(0),
            c = Math.log(s) / Math.log(256),
            u = Math.log(256) / Math.log(s);
          function l(e) {
            if ('string' != typeof e) throw new TypeError('Expected String');
            if (0 === e.length) return new Uint8Array();
            for (var r = 0, n = 0, i = 0; e[r] === a; ) n++, r++;
            for (
              var o = ((e.length - r) * c + 1) >>> 0, u = new Uint8Array(o);
              e[r];

            ) {
              var l = t[e.charCodeAt(r)];
              if (255 === l) return;
              for (
                var d = 0, f = o - 1;
                (0 !== l || d < i) && -1 !== f;
                f--, d++
              )
                (l += (s * u[f]) >>> 0),
                  (u[f] = l % 256 >>> 0),
                  (l = (l / 256) >>> 0);
              if (0 !== l) throw new Error('Non-zero carry');
              (i = d), r++;
            }
            for (var h = o - i; h !== o && 0 === u[h]; ) h++;
            for (var p = new Uint8Array(n + (o - h)), y = n; h !== o; )
              p[y++] = u[h++];
            return p;
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError('Expected Uint8Array');
              if (0 === t.length) return '';
              for (
                var r = 0, n = 0, i = 0, o = t.length;
                i !== o && 0 === t[i];

              )
                i++, r++;
              for (
                var c = ((o - i) * u + 1) >>> 0, l = new Uint8Array(c);
                i !== o;

              ) {
                for (
                  var d = t[i], f = 0, h = c - 1;
                  (0 !== d || f < n) && -1 !== h;
                  h--, f++
                )
                  (d += (256 * l[h]) >>> 0),
                    (l[h] = d % s >>> 0),
                    (d = (d / s) >>> 0);
                if (0 !== d) throw new Error('Non-zero carry');
                (n = f), i++;
              }
              for (var p = c - n; p !== c && 0 === l[p]; ) p++;
              for (var y = a.repeat(r); p < c; ++p) y += e.charAt(l[p]);
              return y;
            },
            decodeUnsafe: l,
            decode: function (e) {
              var t = l(e);
              if (t) return t;
              throw new Error('Non-base' + s + ' character');
            },
          };
        };
      },
      8009: (e, t, r) => {
        const n = r(5413);
        e.exports = n(
          '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        );
      },
    },
    r = {};
  function n(e) {
    var i = r[e];
    if (void 0 !== i) return i.exports;
    var o = (r[e] = { exports: {} });
    return t[e](o, o.exports, n), o.exports;
  }
  (n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    ((e =
      'undefined' != typeof window
        ? window
        : void 0 !== n.g
        ? n.g
        : 'undefined' != typeof self
        ? self
        : {}).SENTRY_RELEASE = { id: '23.7.29.0' }),
    (e.SENTRY_RELEASES = e.SENTRY_RELEASES || {}),
    (e.SENTRY_RELEASES['wallet@mysten-labs'] = { id: '23.7.29.0' }),
    (() => {
      'use strict';
      var e;
      class t extends Event {
        constructor(t) {
          super('wallet-standard:register-wallet', {
            bubbles: !1,
            cancelable: !1,
            composed: !1,
          }),
            e.set(this, void 0),
            (function (e, t, r, n, i) {
              if ('m' === n)
                throw new TypeError('Private method is not writable');
              if ('a' === n && !i)
                throw new TypeError(
                  'Private accessor was defined without a setter',
                );
              if ('function' == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  'Cannot write private member to an object whose class did not declare it',
                );
              'a' === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r);
            })(this, e, t, 'f');
        }
        get detail() {
          return (function (e, t, r, n) {
            if ('a' === r && !n)
              throw new TypeError(
                'Private accessor was defined without a getter',
              );
            if ('function' == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it',
              );
            return 'm' === r
              ? n
              : 'a' === r
              ? n.call(e)
              : n
              ? n.value
              : t.get(e);
          })(this, e, 'f');
        }
        get type() {
          return 'wallet-standard:register-wallet';
        }
        preventDefault() {
          throw new Error('preventDefault cannot be called');
        }
        stopImmediatePropagation() {
          throw new Error('stopImmediatePropagation cannot be called');
        }
        stopPropagation() {
          throw new Error('stopPropagation cannot be called');
        }
      }
      e = new WeakMap();
      var r,
        i,
        o,
        s,
        a,
        c,
        u = function (e, t, r, n, i) {
          if ('m' === n) throw new TypeError('Private method is not writable');
          if ('a' === n && !i)
            throw new TypeError(
              'Private accessor was defined without a setter',
            );
          if ('function' == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              'Cannot write private member to an object whose class did not declare it',
            );
          return 'a' === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
        },
        l = function (e, t, r, n) {
          if ('a' === r && !n)
            throw new TypeError(
              'Private accessor was defined without a getter',
            );
          if ('function' == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it',
            );
          return 'm' === r ? n : 'a' === r ? n.call(e) : n ? n.value : t.get(e);
        };
      class d {
        constructor(e) {
          r.set(this, void 0),
            i.set(this, void 0),
            o.set(this, void 0),
            s.set(this, void 0),
            a.set(this, void 0),
            c.set(this, void 0),
            new.target === d && Object.freeze(this),
            u(this, r, e.address, 'f'),
            u(this, i, e.publicKey.slice(), 'f'),
            u(this, o, e.chains.slice(), 'f'),
            u(this, s, e.features.slice(), 'f'),
            u(this, a, e.label, 'f'),
            u(this, c, e.icon, 'f');
        }
        get address() {
          return l(this, r, 'f');
        }
        get publicKey() {
          return l(this, i, 'f').slice();
        }
        get chains() {
          return l(this, o, 'f').slice();
        }
        get features() {
          return l(this, s, 'f').slice();
        }
        get label() {
          return l(this, a, 'f');
        }
        get icon() {
          return l(this, c, 'f');
        }
      }
      (r = new WeakMap()),
        (i = new WeakMap()),
        (o = new WeakMap()),
        (s = new WeakMap()),
        (a = new WeakMap()),
        (c = new WeakMap());
      const f = 'sui:devnet',
        h = 'sui:testnet',
        p = 'sui:localnet',
        y = 'sui:mainnet',
        g = [f, h, p, y];
      function m(e, t) {
        for (
          var r,
            n,
            i,
            o = e.replace(/[^A-Za-z0-9+/]/g, ''),
            s = o.length,
            a = t ? Math.ceil(((3 * s + 1) >> 2) / t) * t : (3 * s + 1) >> 2,
            c = new Uint8Array(a),
            u = 0,
            l = 0,
            d = 0;
          d < s;
          d++
        )
          if (
            ((n = 3 & d),
            (u |=
              ((i = o.charCodeAt(d)) > 64 && i < 91
                ? i - 65
                : i > 96 && i < 123
                ? i - 71
                : i > 47 && i < 58
                ? i + 4
                : 43 === i
                ? 62
                : 47 === i
                ? 63
                : 0) <<
              (6 * (3 - n))),
            3 === n || s - d == 1)
          ) {
            for (r = 0; r < 3 && l < a; r++, l++)
              c[l] = (u >>> ((16 >>> r) & 24)) & 255;
            u = 0;
          }
        return c;
      }
      function b(e) {
        return e < 26
          ? e + 65
          : e < 52
          ? e + 71
          : e < 62
          ? e - 4
          : 62 === e
          ? 43
          : 63 === e
          ? 47
          : 65;
      }
      function v(e) {
        for (var t = 2, r = '', n = e.length, i = 0, o = 0; o < n; o++)
          (t = o % 3),
            (i |= e[o] << ((16 >>> t) & 24)),
            (2 !== t && e.length - o != 1) ||
              ((r += String.fromCodePoint(
                b((i >>> 18) & 63),
                b((i >>> 12) & 63),
                b((i >>> 6) & 63),
                b(63 & i),
              )),
              (i = 0));
        return (
          r.slice(0, r.length - 2 + t) + (2 === t ? '' : 1 === t ? '=' : '==')
        );
      }
      function w(e) {
        let t = e
          .replace('0x', '')
          .match(/.{1,2}/g)
          .map(e => parseInt(e, 16));
        if (null === t) throw new Error(`Unable to parse HEX: ${e}`);
        return Uint8Array.from(t);
      }
      function S(e) {
        return e.reduce((e, t) => e + t.toString(16).padStart(2, '0'), '');
      }
      var T = n(8009),
        E = n.n(T);
      function x(e, t) {
        let r = new Uint8Array(t),
          n = 0;
        for (; e > 0; )
          (r[n] = Number(e % BigInt(256))), (e /= BigInt(256)), (n += 1);
        return r;
      }
      const A = e => E().encode(e),
        j = e => E().decode(e);
      class M {
        constructor(e) {
          (this.bytePosition = 0), (this.dataView = new DataView(e.buffer));
        }
        shift(e) {
          return (this.bytePosition += e), this;
        }
        read8() {
          let e = this.dataView.getUint8(this.bytePosition);
          return this.shift(1), e;
        }
        read16() {
          let e = this.dataView.getUint16(this.bytePosition, !0);
          return this.shift(2), e;
        }
        read32() {
          let e = this.dataView.getUint32(this.bytePosition, !0);
          return this.shift(4), e;
        }
        read64() {
          let e = this.read32(),
            t = this.read32().toString(16) + e.toString(16).padStart(8, '0');
          return BigInt('0x' + t).toString(10);
        }
        read128() {
          let e = BigInt(this.read64()),
            t =
              BigInt(this.read64()).toString(16) +
              e.toString(16).padStart(16, '0');
          return BigInt('0x' + t).toString(10);
        }
        read256() {
          let e = BigInt(this.read128()),
            t =
              BigInt(this.read128()).toString(16) +
              e.toString(16).padStart(32, '0');
          return BigInt('0x' + t).toString(10);
        }
        readBytes(e) {
          let t = this.bytePosition + this.dataView.byteOffset,
            r = new Uint8Array(this.dataView.buffer, t, e);
          return this.shift(e), r;
        }
        readULEB() {
          let e = this.bytePosition + this.dataView.byteOffset,
            t = new Uint8Array(this.dataView.buffer, e),
            { value: r, length: n } = (function (e) {
              let t = 0,
                r = 0,
                n = 0;
              for (;;) {
                let i = e[n];
                if (((n += 1), (t |= (127 & i) << r), 0 == (128 & i))) break;
                r += 7;
              }
              return { value: t, length: n };
            })(t);
          return this.shift(n), r;
        }
        readVec(e) {
          let t = this.readULEB(),
            r = [];
          for (let n = 0; n < t; n++) r.push(e(this, n, t));
          return r;
        }
      }
      class I {
        constructor({
          size: e = 1024,
          maxSize: t,
          allocateSize: r = 1024,
        } = {}) {
          (this.bytePosition = 0),
            (this.size = e),
            (this.maxSize = t || e),
            (this.allocateSize = r),
            (this.dataView = new DataView(new ArrayBuffer(e)));
        }
        ensureSizeOrGrow(e) {
          const t = this.bytePosition + e;
          if (t > this.size) {
            const e = Math.min(this.maxSize, this.size + this.allocateSize);
            if (t > e)
              throw new Error(
                `Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${t}`,
              );
            this.size = e;
            const r = new ArrayBuffer(this.size);
            new Uint8Array(r).set(new Uint8Array(this.dataView.buffer)),
              (this.dataView = new DataView(r));
          }
        }
        shift(e) {
          return (this.bytePosition += e), this;
        }
        write8(e) {
          return (
            this.ensureSizeOrGrow(1),
            this.dataView.setUint8(this.bytePosition, Number(e)),
            this.shift(1)
          );
        }
        write16(e) {
          return (
            this.ensureSizeOrGrow(2),
            this.dataView.setUint16(this.bytePosition, Number(e), !0),
            this.shift(2)
          );
        }
        write32(e) {
          return (
            this.ensureSizeOrGrow(4),
            this.dataView.setUint32(this.bytePosition, Number(e), !0),
            this.shift(4)
          );
        }
        write64(e) {
          return x(BigInt(e), 8).forEach(e => this.write8(e)), this;
        }
        write128(e) {
          return x(BigInt(e), 16).forEach(e => this.write8(e)), this;
        }
        write256(e) {
          return x(BigInt(e), 32).forEach(e => this.write8(e)), this;
        }
        writeULEB(e) {
          return (
            (function (e) {
              let t = [],
                r = 0;
              if (0 === e) return [0];
              for (; e > 0; )
                (t[r] = 127 & e), (e >>= 7) && (t[r] |= 128), (r += 1);
              return t;
            })(e).forEach(e => this.write8(e)),
            this
          );
        }
        writeVec(e, t) {
          return (
            this.writeULEB(e.length),
            Array.from(e).forEach((r, n) => t(this, r, n, e.length)),
            this
          );
        }
        *[Symbol.iterator]() {
          for (let e = 0; e < this.bytePosition; e++)
            yield this.dataView.getUint8(e);
          return this.toBytes();
        }
        toBytes() {
          return new Uint8Array(
            this.dataView.buffer.slice(0, this.bytePosition),
          );
        }
        toString(e) {
          return (function (e, t) {
            switch (t) {
              case 'base58':
                return A(e);
              case 'base64':
                return v(e);
              case 'hex':
                return S(e);
              default:
                throw new Error(
                  'Unsupported encoding, supported values are: base64, hex',
                );
            }
          })(this.toBytes(), e);
        }
      }
      class k {
        tempKey() {
          return 'bcs-struct-' + ++this.counter;
        }
        constructor(e) {
          if (((this.types = new Map()), (this.counter = 0), e instanceof k))
            return (
              (this.schema = e.schema), void (this.types = new Map(e.types))
            );
          if (
            ((this.schema = e),
            this.registerAddressType(
              k.ADDRESS,
              e.addressLength,
              e.addressEncoding,
            ),
            this.registerVectorType(e.vectorType),
            e.types && e.types.structs)
          )
            for (let t of Object.keys(e.types.structs))
              this.registerStructType(t, e.types.structs[t]);
          if (e.types && e.types.enums)
            for (let t of Object.keys(e.types.enums))
              this.registerEnumType(t, e.types.enums[t]);
          if (e.types && e.types.aliases)
            for (let t of Object.keys(e.types.aliases))
              this.registerAlias(t, e.types.aliases[t]);
          !1 !== e.withPrimitives &&
            (function (e) {
              e.registerType(
                k.U8,
                function (e, t) {
                  return e.write8(t);
                },
                function (e) {
                  return e.read8();
                },
                e => e < 256,
              ),
                e.registerType(
                  k.U16,
                  function (e, t) {
                    return e.write16(t);
                  },
                  function (e) {
                    return e.read16();
                  },
                  e => e < 65536,
                ),
                e.registerType(
                  k.U32,
                  function (e, t) {
                    return e.write32(t);
                  },
                  function (e) {
                    return e.read32();
                  },
                  e => e <= 4294967296n,
                ),
                e.registerType(
                  k.U64,
                  function (e, t) {
                    return e.write64(t);
                  },
                  function (e) {
                    return e.read64();
                  },
                ),
                e.registerType(
                  k.U128,
                  function (e, t) {
                    return e.write128(t);
                  },
                  function (e) {
                    return e.read128();
                  },
                ),
                e.registerType(
                  k.U256,
                  function (e, t) {
                    return e.write256(t);
                  },
                  function (e) {
                    return e.read256();
                  },
                ),
                e.registerType(
                  k.BOOL,
                  function (e, t) {
                    return e.write8(t);
                  },
                  function (e) {
                    return '1' === e.read8().toString(10);
                  },
                ),
                e.registerType(
                  k.STRING,
                  function (e, t) {
                    return e.writeVec(Array.from(t), (e, t) =>
                      e.write8(t.charCodeAt(0)),
                    );
                  },
                  function (e) {
                    return e
                      .readVec(e => e.read8())
                      .map(e => String.fromCharCode(Number(e)))
                      .join('');
                  },
                  e => !0,
                ),
                e.registerType(
                  k.HEX,
                  function (e, t) {
                    return e.writeVec(Array.from(w(t)), (e, t) => e.write8(t));
                  },
                  function (e) {
                    let t = e.readVec(e => e.read8());
                    return S(new Uint8Array(t));
                  },
                ),
                e.registerType(
                  k.BASE58,
                  function (e, t) {
                    return e.writeVec(Array.from(j(t)), (e, t) => e.write8(t));
                  },
                  function (e) {
                    let t = e.readVec(e => e.read8());
                    return A(new Uint8Array(t));
                  },
                ),
                e.registerType(
                  k.BASE64,
                  function (e, t) {
                    return e.writeVec(Array.from(m(t)), (e, t) => e.write8(t));
                  },
                  function (e) {
                    let t = e.readVec(e => e.read8());
                    return v(new Uint8Array(t));
                  },
                );
            })(this);
        }
        ser(e, t, r) {
          if ('string' == typeof e || Array.isArray(e)) {
            const { name: n, params: i } = this.parseTypeName(e);
            return this.getTypeInterface(n).encode(this, t, r, i);
          }
          if ('object' == typeof e) {
            const n = this.tempKey();
            return new k(this).registerStructType(n, e).ser(n, t, r);
          }
          throw new Error(
            `Incorrect type passed into the '.ser()' function. \n${JSON.stringify(
              e,
            )}`,
          );
        }
        de(e, t, r) {
          if ('string' == typeof t) {
            if (!r)
              throw new Error('To pass a string to `bcs.de`, specify encoding');
            t = (function (e, t) {
              switch (t) {
                case 'base58':
                  return j(e);
                case 'base64':
                  return m(e);
                case 'hex':
                  return w(e);
                default:
                  throw new Error(
                    'Unsupported encoding, supported values are: base64, hex',
                  );
              }
            })(t, r);
          }
          if ('string' == typeof e || Array.isArray(e)) {
            const { name: r, params: n } = this.parseTypeName(e);
            return this.getTypeInterface(r).decode(this, t, n);
          }
          if ('object' == typeof e) {
            const n = new k(this),
              i = this.tempKey();
            return n.registerStructType(i, e).de(i, t, r);
          }
          throw new Error(
            `Incorrect type passed into the '.de()' function. \n${JSON.stringify(
              e,
            )}`,
          );
        }
        hasType(e) {
          return this.types.has(e);
        }
        registerAlias(e, t) {
          return this.types.set(e, t), this;
        }
        registerType(e, t, r, n = () => !0) {
          const { name: i, params: o } = this.parseTypeName(e);
          return (
            this.types.set(i, {
              encode(e, t, r, n) {
                const i = o.reduce(
                  (e, t, r) => Object.assign(e, { [t]: n[r] }),
                  {},
                );
                return this._encodeRaw.call(e, new I(r), t, n, i);
              },
              decode(e, t, r) {
                const n = o.reduce(
                  (e, t, n) => Object.assign(e, { [t]: r[n] }),
                  {},
                );
                return this._decodeRaw.call(e, new M(t), r, n);
              },
              _encodeRaw(e, r, o, s) {
                if (n(r)) return t.call(this, e, r, o, s);
                throw new Error(`Validation failed for type ${i}, data: ${r}`);
              },
              _decodeRaw(e, t, n) {
                return r.call(this, e, t, n);
              },
            }),
            this
          );
        }
        registerAddressType(e, t, r = 'hex') {
          switch (r) {
            case 'base64':
              return this.registerType(
                e,
                function (e, t) {
                  return m(t).reduce((e, t) => e.write8(t), e);
                },
                function (e) {
                  return v(e.readBytes(t));
                },
              );
            case 'hex':
              return this.registerType(
                e,
                function (e, t) {
                  return w(t).reduce((e, t) => e.write8(t), e);
                },
                function (e) {
                  return S(e.readBytes(t));
                },
              );
            default:
              throw new Error('Unsupported encoding! Use either hex or base64');
          }
        }
        registerVectorType(e) {
          let { name: t, params: r } = this.parseTypeName(e);
          if (r.length > 1)
            throw new Error(
              'Vector can have only one type parameter; got ' + t,
            );
          return this.registerType(
            e,
            function (t, r, n, i) {
              return t.writeVec(r, (t, r) => {
                let o = n[0];
                if (!o)
                  throw new Error(
                    `Incorrect number of type parameters passed a to vector '${e}'`,
                  );
                let { name: s, params: a } = this.parseTypeName(o);
                if (this.hasType(s))
                  return this.getTypeInterface(s)._encodeRaw.call(
                    this,
                    t,
                    r,
                    a,
                    i,
                  );
                if (!(s in i))
                  throw new Error(
                    `Unable to find a matching type definition for ${s} in vector; make sure you passed a generic`,
                  );
                let { name: c, params: u } = this.parseTypeName(i[s]);
                return this.getTypeInterface(c)._encodeRaw.call(
                  this,
                  t,
                  r,
                  u,
                  i,
                );
              });
            },
            function (t, r, n) {
              return t.readVec(t => {
                let i = r[0];
                if (!i)
                  throw new Error(
                    `Incorrect number of type parameters passed to a vector '${e}'`,
                  );
                let { name: o, params: s } = this.parseTypeName(i);
                if (this.hasType(o))
                  return this.getTypeInterface(o)._decodeRaw.call(
                    this,
                    t,
                    s,
                    n,
                  );
                if (!(o in n))
                  throw new Error(
                    `Unable to find a matching type definition for ${o} in vector; make sure you passed a generic`,
                  );
                let { name: a, params: c } = this.parseTypeName(n[o]);
                return this.getTypeInterface(a)._decodeRaw.call(this, t, c, n);
              });
            },
          );
        }
        registerStructType(e, t) {
          for (let e in t) {
            let r = this.tempKey(),
              n = t[e];
            Array.isArray(n) ||
              'string' == typeof n ||
              ((t[e] = r), this.registerStructType(r, n));
          }
          let r = Object.freeze(t),
            n = Object.keys(r),
            { name: i, params: o } = this.parseTypeName(e);
          return this.registerType(
            e,
            function (e, t, s, a) {
              if (!t || t.constructor !== Object)
                throw new Error(`Expected ${i} to be an Object, got: ${t}`);
              if (s.length !== o.length)
                throw new Error(
                  `Incorrect number of generic parameters passed; expected: ${o.length}, got: ${s.length}`,
                );
              for (let c of n) {
                if (!(c in t))
                  throw new Error(`Struct ${i} requires field ${c}:${r[c]}`);
                const { name: n, params: u } = this.parseTypeName(r[c]);
                if (o.includes(n)) {
                  const r = o.indexOf(n);
                  let { name: u, params: l } = this.parseTypeName(s[r]);
                  if (this.hasType(u)) {
                    this.getTypeInterface(u)._encodeRaw.call(
                      this,
                      e,
                      t[c],
                      l,
                      a,
                    );
                    continue;
                  }
                  if (!(u in a))
                    throw new Error(
                      `Unable to find a matching type definition for ${u} in ${i}; make sure you passed a generic`,
                    );
                  let { name: d, params: f } = this.parseTypeName(a[u]);
                  this.getTypeInterface(d)._encodeRaw.call(this, e, t[c], f, a);
                } else
                  this.getTypeInterface(n)._encodeRaw.call(this, e, t[c], u, a);
              }
              return e;
            },
            function (e, t, s) {
              if (t.length !== o.length)
                throw new Error(
                  `Incorrect number of generic parameters passed; expected: ${o.length}, got: ${t.length}`,
                );
              let a = {};
              for (let c of n) {
                const { name: n, params: u } = this.parseTypeName(r[c]);
                if (o.includes(n)) {
                  const r = o.indexOf(n);
                  let { name: u, params: l } = this.parseTypeName(t[r]);
                  if (this.hasType(u)) {
                    a[c] = this.getTypeInterface(u)._decodeRaw.call(
                      this,
                      e,
                      l,
                      s,
                    );
                    continue;
                  }
                  if (!(u in s))
                    throw new Error(
                      `Unable to find a matching type definition for ${u} in ${i}; make sure you passed a generic`,
                    );
                  let { name: d, params: f } = this.parseTypeName(s[u]);
                  a[c] = this.getTypeInterface(d)._decodeRaw.call(
                    this,
                    e,
                    f,
                    s,
                  );
                } else
                  a[c] = this.getTypeInterface(n)._decodeRaw.call(
                    this,
                    e,
                    u,
                    s,
                  );
              }
              return a;
            },
          );
        }
        registerEnumType(e, t) {
          for (let e in t) {
            let r = this.tempKey(),
              n = t[e];
            null === n ||
              Array.isArray(n) ||
              'string' == typeof n ||
              ((t[e] = r), this.registerStructType(r, n));
          }
          let r = Object.freeze(t),
            n = Object.keys(r),
            { name: i, params: o } = this.parseTypeName(e);
          return this.registerType(
            e,
            function (e, t, s, a) {
              if (!t)
                throw new Error(
                  `Unable to write enum "${i}", missing data.\nReceived: "${t}"`,
                );
              if ('object' != typeof t)
                throw new Error(
                  `Incorrect data passed into enum "${i}", expected object with properties: "${n.join(
                    ' | ',
                  )}".\nReceived: "${JSON.stringify(t)}"`,
                );
              let c = Object.keys(t)[0];
              if (void 0 === c)
                throw new Error(
                  `Empty object passed as invariant of the enum "${i}"`,
                );
              let u = n.indexOf(c);
              if (-1 === u)
                throw new Error(
                  `Unknown invariant of the enum "${i}", allowed values: "${n.join(
                    ' | ',
                  )}"; received "${c}"`,
                );
              let l = n[u],
                d = r[l];
              if ((e.write8(u), null === d)) return e;
              let f = o.indexOf(d),
                h = -1 === f ? d : s[f];
              {
                let { name: r, params: n } = this.parseTypeName(h);
                return this.getTypeInterface(r)._encodeRaw.call(
                  this,
                  e,
                  t[c],
                  n,
                  a,
                );
              }
            },
            function (e, t, s) {
              let a = e.readULEB(),
                c = n[a],
                u = r[c];
              if (-1 === a)
                throw new Error(
                  `Decoding type mismatch, expected enum "${i}" invariant index, received "${a}"`,
                );
              if (null === u) return { [c]: !0 };
              let l = o.indexOf(u),
                d = -1 === l ? u : t[l];
              {
                let { name: t, params: r } = this.parseTypeName(d);
                return {
                  [c]: this.getTypeInterface(t)._decodeRaw.call(this, e, r, s),
                };
              }
            },
          );
        }
        getTypeInterface(e) {
          let t = this.types.get(e);
          if ('string' == typeof t) {
            let e = [];
            for (; 'string' == typeof t; ) {
              if (e.includes(t))
                throw new Error(
                  `Recursive definition found: ${e.join(' -> ')} -> ${t}`,
                );
              e.push(t), (t = this.types.get(t));
            }
          }
          if (void 0 === t) throw new Error(`Type ${e} is not registered`);
          return t;
        }
        parseTypeName(e) {
          if (Array.isArray(e)) {
            let [t, ...r] = e;
            return { name: t, params: r };
          }
          if ('string' != typeof e)
            throw new Error(`Illegal type passed as a name of the type: ${e}`);
          let [t, r] = this.schema.genericSeparators || ['<', '>'],
            n = e.indexOf(t),
            i = Array.from(e).reverse().indexOf(r);
          if (-1 === n && -1 === i) return { name: e, params: [] };
          if (-1 === n || -1 === i)
            throw new Error(`Unclosed generic in name '${e}'`);
          return {
            name: e.slice(0, n),
            params: D(
              e.slice(n + 1, e.length - i - 1),
              this.schema.genericSeparators,
            ),
          };
        }
      }
      function D(e, t = ['<', '>']) {
        const [r, n] = t,
          i = [];
        let o = '',
          s = 0;
        for (let t = 0; t < e.length; t++) {
          const a = e[t];
          a === r && s++,
            a === n && s--,
            0 !== s || ',' !== a ? (o += a) : (i.push(o.trim()), (o = ''));
        }
        return i.push(o.trim()), i;
      }
      (k.U8 = 'u8'),
        (k.U16 = 'u16'),
        (k.U32 = 'u32'),
        (k.U64 = 'u64'),
        (k.U128 = 'u128'),
        (k.U256 = 'u256'),
        (k.BOOL = 'bool'),
        (k.VECTOR = 'vector'),
        (k.ADDRESS = 'address'),
        (k.STRING = 'string'),
        (k.HEX = 'hex-string'),
        (k.BASE58 = 'base58-string'),
        (k.BASE64 = 'base64-string');
      const N = 32;
      function O(e, t = !1) {
        let r = e.toLowerCase();
        return (
          !t && r.startsWith('0x') && (r = r.slice(2)),
          `0x${r.padStart(2 * N, '0')}`
        );
      }
      function U(e, t = !1) {
        return O(e, t);
      }
      class _ extends TypeError {
        constructor(e, t) {
          let r;
          const { message: n, explanation: i, ...o } = e,
            { path: s } = e,
            a = 0 === s.length ? n : `At path: ${s.join('.')} -- ${n}`;
          super(i ?? a),
            null != i && (this.cause = a),
            Object.assign(this, o),
            (this.name = this.constructor.name),
            (this.failures = () => r ?? (r = [e, ...t()]));
        }
      }
      function P(e) {
        return 'object' == typeof e && null != e;
      }
      function z(e) {
        return 'symbol' == typeof e
          ? e.toString()
          : 'string' == typeof e
          ? JSON.stringify(e)
          : `${e}`;
      }
      function C(e, t, r, n) {
        if (!0 === e) return;
        !1 === e ? (e = {}) : 'string' == typeof e && (e = { message: e });
        const { path: i, branch: o } = t,
          { type: s } = r,
          {
            refinement: a,
            message: c = `Expected a value of type \`${s}\`${
              a ? ` with refinement \`${a}\`` : ''
            }, but received: \`${z(n)}\``,
          } = e;
        return {
          value: n,
          type: s,
          refinement: a,
          key: i[i.length - 1],
          path: i,
          branch: o,
          ...e,
          message: c,
        };
      }
      function* B(e, t, r, n) {
        var i;
        (P((i = e)) && 'function' == typeof i[Symbol.iterator]) || (e = [e]);
        for (const i of e) {
          const e = C(i, t, r, n);
          e && (yield e);
        }
      }
      function* R(e, t, r = {}) {
        const {
            path: n = [],
            branch: i = [e],
            coerce: o = !1,
            mask: s = !1,
          } = r,
          a = { path: n, branch: i };
        if (
          o &&
          ((e = t.coercer(e, a)),
          s && 'type' !== t.type && P(t.schema) && P(e) && !Array.isArray(e))
        )
          for (const r in e) void 0 === t.schema[r] && delete e[r];
        let c = 'valid';
        for (const n of t.validator(e, a))
          (n.explanation = r.message), (c = 'not_valid'), yield [n, void 0];
        for (let [u, l, d] of t.entries(e, a)) {
          const t = R(l, d, {
            path: void 0 === u ? n : [...n, u],
            branch: void 0 === u ? i : [...i, l],
            coerce: o,
            mask: s,
            message: r.message,
          });
          for (const r of t)
            r[0]
              ? ((c = null != r[0].refinement ? 'not_refined' : 'not_valid'),
                yield [r[0], void 0])
              : o &&
                ((l = r[1]),
                void 0 === u
                  ? (e = l)
                  : e instanceof Map
                  ? e.set(u, l)
                  : e instanceof Set
                  ? e.add(l)
                  : P(e) && (void 0 !== l || u in e) && (e[u] = l));
        }
        if ('not_valid' !== c)
          for (const n of t.refiner(e, a))
            (n.explanation = r.message), (c = 'not_refined'), yield [n, void 0];
        'valid' === c && (yield [void 0, e]);
      }
      class L {
        constructor(e) {
          const {
            type: t,
            schema: r,
            validator: n,
            refiner: i,
            coercer: o = e => e,
            entries: s = function* () {},
          } = e;
          (this.type = t),
            (this.schema = r),
            (this.entries = s),
            (this.coercer = o),
            (this.validator = n ? (e, t) => B(n(e, t), t, this, e) : () => []),
            (this.refiner = i ? (e, t) => B(i(e, t), t, this, e) : () => []);
        }
        assert(e, t) {
          return V(e, this, t);
        }
        create(e, t) {
          return $(e, this, t);
        }
        is(e) {
          return G(e, this);
        }
        mask(e, t) {
          return (function (e, t, r) {
            const n = F(e, t, { coerce: !0, mask: !0, message: r });
            if (n[0]) throw n[0];
            return n[1];
          })(e, this, t);
        }
        validate(e, t = {}) {
          return F(e, this, t);
        }
      }
      function V(e, t, r) {
        const n = F(e, t, { message: r });
        if (n[0]) throw n[0];
      }
      function $(e, t, r) {
        const n = F(e, t, { coerce: !0, message: r });
        if (n[0]) throw n[0];
        return n[1];
      }
      function G(e, t) {
        return !F(e, t)[0];
      }
      function F(e, t, r = {}) {
        const n = R(e, t, r),
          i = (function (e) {
            const { done: t, value: r } = e.next();
            return t ? void 0 : r;
          })(n);
        return i[0]
          ? [
              new _(i[0], function* () {
                for (const e of n) e[0] && (yield e[0]);
              }),
              void 0,
            ]
          : [void 0, i[1]];
      }
      function W(...e) {
        const t = 'type' === e[0].type,
          r = e.map(e => e.schema),
          n = Object.assign({}, ...r);
        return t
          ? (function (e) {
              const t = Object.keys(e);
              return new L({
                type: 'type',
                schema: e,
                *entries(r) {
                  if (P(r)) for (const n of t) yield [n, r[n], e[n]];
                },
                validator: e =>
                  P(e) || `Expected an object, but received: ${z(e)}`,
                coercer: e => (P(e) ? { ...e } : e),
              });
            })(n)
          : te(n);
      }
      function Q(e, t) {
        return new L({ type: e, schema: null, validator: t });
      }
      function H() {
        return Q('any', () => !0);
      }
      function Y(e) {
        return new L({
          type: 'array',
          schema: e,
          *entries(t) {
            if (e && Array.isArray(t))
              for (const [r, n] of t.entries()) yield [r, n, e];
          },
          coercer: e => (Array.isArray(e) ? e.slice() : e),
          validator: e =>
            Array.isArray(e) ||
            `Expected an array value, but received: ${z(e)}`,
        });
      }
      function K() {
        return Q('boolean', e => 'boolean' == typeof e);
      }
      function q() {
        return Q(
          'integer',
          e =>
            ('number' == typeof e && !isNaN(e) && Number.isInteger(e)) ||
            `Expected an integer, but received: ${z(e)}`,
        );
      }
      function J(e) {
        const t = z(e),
          r = typeof e;
        return new L({
          type: 'literal',
          schema:
            'string' === r || 'number' === r || 'boolean' === r ? e : null,
          validator: r =>
            r === e || `Expected the literal \`${t}\`, but received: ${z(r)}`,
        });
      }
      function Z() {
        return Q('never', () => !1);
      }
      function X(e) {
        return new L({
          ...e,
          validator: (t, r) => null === t || e.validator(t, r),
          refiner: (t, r) => null === t || e.refiner(t, r),
        });
      }
      function ee() {
        return Q(
          'number',
          e =>
            ('number' == typeof e && !isNaN(e)) ||
            `Expected a number, but received: ${z(e)}`,
        );
      }
      function te(e) {
        const t = e ? Object.keys(e) : [],
          r = Z();
        return new L({
          type: 'object',
          schema: e || null,
          *entries(n) {
            if (e && P(n)) {
              const i = new Set(Object.keys(n));
              for (const r of t) i.delete(r), yield [r, n[r], e[r]];
              for (const e of i) yield [e, n[e], r];
            }
          },
          validator: e => P(e) || `Expected an object, but received: ${z(e)}`,
          coercer: e => (P(e) ? { ...e } : e),
        });
      }
      function re(e) {
        return new L({
          ...e,
          validator: (t, r) => void 0 === t || e.validator(t, r),
          refiner: (t, r) => void 0 === t || e.refiner(t, r),
        });
      }
      function ne(e, t) {
        return new L({
          type: 'record',
          schema: null,
          *entries(r) {
            if (P(r))
              for (const n in r) {
                const i = r[n];
                yield [n, n, e], yield [n, i, t];
              }
          },
          validator: e => P(e) || `Expected an object, but received: ${z(e)}`,
        });
      }
      function ie() {
        return Q(
          'string',
          e =>
            'string' == typeof e || `Expected a string, but received: ${z(e)}`,
        );
      }
      function oe(e) {
        const t = Z();
        return new L({
          type: 'tuple',
          schema: null,
          *entries(r) {
            if (Array.isArray(r)) {
              const n = Math.max(e.length, r.length);
              for (let i = 0; i < n; i++) yield [i, r[i], e[i] || t];
            }
          },
          validator: e =>
            Array.isArray(e) || `Expected an array, but received: ${z(e)}`,
        });
      }
      function se(e) {
        const t = e.map(e => e.type).join(' | ');
        return new L({
          type: 'union',
          schema: null,
          coercer(t) {
            for (const r of e) {
              const [e, n] = r.validate(t, { coerce: !0 });
              if (!e) return n;
            }
            return t;
          },
          validator(r, n) {
            const i = [];
            for (const t of e) {
              const [...e] = R(r, t, n),
                [o] = e;
              if (!o[0]) return [];
              for (const [t] of e) t && i.push(t);
            }
            return [
              `Expected the value to satisfy a union of \`${t}\`, but received: ${z(
                r,
              )}`,
              ...i,
            ];
          },
        });
      }
      function ae() {
        return Q('unknown', () => !0);
      }
      ie(), ie(), ie(), ie(), ie(), ie();
      const ce = se([
          te({ AddressOwner: ie() }),
          te({ ObjectOwner: ie() }),
          te({ Shared: te({ initial_shared_version: X(ie()) }) }),
          J('Immutable'),
        ]),
        ue = Q('SuiJsonValue', () => !0),
        le = se([te({ u32: ie() }), te({ u64: ie() }), te({ f64: ie() })]),
        de =
          (te({
            attributes: ne(ie(), X(le)),
            featureFlags: ne(ie(), K()),
            maxSupportedProtocolVersion: ie(),
            minSupportedProtocolVersion: ie(),
            protocolVersion: ie(),
          }),
          se([ie(), J('package')]),
          te({ digest: ie(), objectId: ie(), version: se([ee(), ie()]) })),
        fe = te({ payment: Y(de), owner: ie(), price: ie(), budget: ie() }),
        he = W(de, te({ type: ie(), owner: ce, previousTransaction: ie() })),
        pe = ne(ie(), H()),
        ye = ne(ie(), ae()),
        ge = te({ type: ie(), fields: pe, hasPublicTransfer: K() }),
        me = te({ disassembled: ye }),
        be = se([
          W(ge, te({ dataType: J('moveObject') })),
          W(me, te({ dataType: J('package') })),
        ]),
        ve = te({
          type: ie(),
          hasPublicTransfer: K(),
          version: ie(),
          bcsBytes: ie(),
        }),
        we = te({ id: ie(), moduleMap: ne(ie(), ie()) }),
        Se = se([
          W(ve, te({ dataType: J('moveObject') })),
          W(we, te({ dataType: J('package') })),
        ]),
        Te =
          (BigInt(1e9),
          ie(),
          te({
            code: ie(),
            error: re(ie()),
            object_id: re(ie()),
            parent_object_id: re(ie()),
            version: re(ie()),
            digest: re(ie()),
          })),
        Ee = se([
          te({ data: X(re(ne(ie(), ie()))), error: X(re(Te)) }),
          re(ne(ie(), ie())),
        ]),
        xe = te({
          objectId: ie(),
          version: ie(),
          digest: ie(),
          type: X(re(ie())),
          content: X(re(be)),
          bcs: X(re(Se)),
          owner: X(re(ce)),
          previousTransaction: X(re(ie())),
          storageRebate: X(re(ie())),
          display: X(re(Ee)),
        }),
        Ae =
          (te({
            showType: X(re(K())),
            showContent: X(re(K())),
            showBcs: X(re(K())),
            showOwner: X(re(K())),
            showPreviousTransaction: X(re(K())),
            showStorageRebate: X(re(K())),
            showDisplay: X(re(K())),
          }),
          se([J('Exists'), J('notExists'), J('Deleted')]),
          Y(he),
          te({ data: X(re(xe)), error: X(re(Te)) }));
      te({ objectId: ie(), atCheckpoint: re(ee()) }),
        te({ data: Y(Ae), nextCursor: re(X(ie())), hasNextPage: K() }),
        se([
          te({ details: xe, status: J('VersionFound') }),
          te({ details: ie(), status: J('ObjectNotExists') }),
          te({ details: de, status: J('ObjectDeleted') }),
          te({ details: oe([ie(), ee()]), status: J('VersionNotFound') }),
          te({
            details: te({
              asked_version: ee(),
              latest_version: ee(),
              object_id: ie(),
            }),
            status: J('VersionTooHigh'),
          }),
        ]);
      const je = te({ txDigest: ie(), eventSeq: ie() }),
        Me = te({
          id: je,
          packageId: ie(),
          transactionModule: ie(),
          sender: ie(),
          type: ie(),
          parsedJson: re(ne(ie(), H())),
          bcs: re(ie()),
          timestampMs: re(ie()),
        });
      te({ data: Y(Me), nextCursor: X(je), hasNextPage: K() }), ie();
      const Ie = te({
          epoch: ie(),
          storage_charge: ie(),
          computation_charge: ie(),
          storage_rebate: ie(),
          epoch_start_timestamp_ms: re(ie()),
        }),
        ke = te({ epoch: ie(), round: ie(), commit_timestamp_ms: ie() }),
        De = te({ objects: Y(ie()) }),
        Ne = se([
          J('GasCoin'),
          te({ Input: ee() }),
          te({ Result: ee() }),
          te({ NestedResult: oe([ee(), ee()]) }),
        ]),
        Oe = te({
          arguments: re(Y(Ne)),
          type_arguments: re(Y(ie())),
          package: ie(),
          module: ie(),
          function: ie(),
        }),
        Ue = se([
          te({ MoveCall: Oe }),
          te({ TransferObjects: oe([Y(Ne), Ne]) }),
          te({ SplitCoins: oe([Ne, Y(Ne)]) }),
          te({ MergeCoins: oe([Ne, Y(Ne)]) }),
          te({ Publish: se([oe([me, Y(ie())]), Y(ie())]) }),
          te({
            Upgrade: se([oe([me, Y(ie()), ie(), Ne]), oe([Y(ie()), ie(), Ne])]),
          }),
          te({ MakeMoveVec: oe([X(ie()), Y(Ne)]) }),
        ]),
        _e = se([
          te({ type: J('pure'), valueType: X(ie()), value: ue }),
          te({
            type: J('object'),
            objectType: J('immOrOwnedObject'),
            objectId: ie(),
            version: ie(),
            digest: ie(),
          }),
          te({
            type: J('object'),
            objectType: J('sharedObject'),
            objectId: ie(),
            initialSharedVersion: ie(),
            mutable: K(),
          }),
        ]),
        Pe = te({ transactions: Y(Ue), inputs: Y(_e) }),
        ze = se([
          W(Ie, te({ kind: J('ChangeEpoch') })),
          W(ke, te({ kind: J('ConsensusCommitPrologue') })),
          W(De, te({ kind: J('Genesis') })),
          W(Pe, te({ kind: J('ProgrammableTransaction') })),
        ]),
        Ce = te({
          messageVersion: J('v1'),
          transaction: ze,
          sender: ie(),
          gasData: fe,
        }),
        Be = (ie(), se([ie(), Y(ie())])),
        Re =
          (te({ epoch: ie(), signature: Be, signers_map: Y(ee()) }),
          te({
            computationCost: ie(),
            storageCost: ie(),
            storageRebate: ie(),
            nonRefundableStorageFee: ie(),
          })),
        Le = te({ status: se([J('success'), J('failure')]), error: re(ie()) }),
        Ve = te({ owner: ce, reference: de }),
        $e = te({ objectId: ie(), sequenceNumber: ie() }),
        Ge = te({
          messageVersion: J('v1'),
          status: Le,
          executedEpoch: ie(),
          modifiedAtVersions: re(Y($e)),
          gasUsed: Re,
          sharedObjects: re(Y(de)),
          transactionDigest: ie(),
          created: re(Y(Ve)),
          mutated: re(Y(Ve)),
          unwrapped: re(Y(Ve)),
          deleted: re(Y(de)),
          unwrappedThenDeleted: re(Y(de)),
          wrapped: re(Y(de)),
          gasObject: Ve,
          eventsDigest: X(re(ie())),
          dependencies: re(Y(ie())),
        }),
        Fe = Y(Me),
        We = oe([Y(ee()), ie()]),
        Qe = oe([Ne, Y(ee()), ie()]),
        He = te({
          mutableReferenceOutputs: re(Y(Qe)),
          returnValues: re(Y(We)),
        }),
        Ye =
          (te({ effects: Ge, events: Fe, results: re(Y(He)), error: re(ie()) }),
          ie(),
          te({ data: Ce, txSignatures: Y(ie()) })),
        Ke = se([
          te({
            type: J('published'),
            packageId: ie(),
            version: ie(),
            digest: ie(),
            modules: Y(ie()),
          }),
          te({
            type: J('transferred'),
            sender: ie(),
            recipient: ce,
            objectType: ie(),
            objectId: ie(),
            version: ie(),
            digest: ie(),
          }),
          te({
            type: J('mutated'),
            sender: ie(),
            owner: ce,
            objectType: ie(),
            objectId: ie(),
            version: ie(),
            previousVersion: ie(),
            digest: ie(),
          }),
          te({
            type: J('deleted'),
            sender: ie(),
            objectType: ie(),
            objectId: ie(),
            version: ie(),
          }),
          te({
            type: J('wrapped'),
            sender: ie(),
            objectType: ie(),
            objectId: ie(),
            version: ie(),
          }),
          te({
            type: J('created'),
            sender: ie(),
            owner: ce,
            objectType: ie(),
            objectId: ie(),
            version: ie(),
            digest: ie(),
          }),
        ]),
        qe = te({ owner: ce, coinType: ie(), amount: ie() }),
        Je = te({
          digest: ie(),
          transaction: re(Ye),
          effects: re(Ge),
          events: re(Fe),
          timestampMs: re(ie()),
          checkpoint: re(ie()),
          confirmedLocalExecution: re(K()),
          objectChanges: re(Y(Ke)),
          balanceChanges: re(Y(qe)),
          errors: re(Y(ie())),
        });
      te({
        showInput: re(K()),
        showEffects: re(K()),
        showEvents: re(K()),
        showObjectChanges: re(K()),
        showBalanceChanges: re(K()),
      }),
        te({ data: Y(Je), nextCursor: X(ie()), hasNextPage: K() }),
        te({
          effects: Ge,
          events: Fe,
          objectChanges: Y(Ke),
          balanceChanges: Y(qe),
          input: re(Ce),
        }),
        Y(se([ie(), te({ Object: ie() })]));
      const Ze = te({ address: ie(), name: ie() }),
        Xe = se([J('Private'), J('Public'), J('Friend')]),
        et = te({ abilities: Y(ie()) }),
        tt = te({ constraints: et, isPhantom: K() }),
        rt = te({ TypeParameter: ee() }),
        nt = oe([te({ module: ie(), package: ie(), function: ie() }), ie()]);
      function it(e) {
        if (!e) return !1;
        if ('string' == typeof e) return !0;
        if (G(e, rt)) return !0;
        if (st(e)) return !0;
        if ('object' != typeof e) return !1;
        const t = e;
        return (
          !!G(t.Reference, ot) ||
          !!G(t.MutableReference, ot) ||
          !!G(t.Vector, ot)
        );
      }
      te({ rank3Days: Y(nt), rank7Days: Y(nt), rank30Days: Y(nt) });
      const ot = Q('SuiMoveNormalizedType', it);
      function st(e) {
        if (!e || 'object' != typeof e) return !1;
        const t = e;
        if (!t.Struct || 'object' != typeof t.Struct) return !1;
        const r = t.Struct;
        return !(
          'string' != typeof r.address ||
          'string' != typeof r.module ||
          'string' != typeof r.name ||
          !Array.isArray(r.typeArguments) ||
          !r.typeArguments.every(e => it(e))
        );
      }
      Q('SuiMoveNormalizedStructType', st);
      const at = te({
          visibility: Xe,
          isEntry: K(),
          typeParameters: Y(et),
          parameters: Y(ot),
          return: Y(ot),
        }),
        ct = te({ name: ie(), type: ot }),
        ut = te({ abilities: et, typeParameters: Y(tt), fields: Y(ct) }),
        lt = te({
          fileFormatVersion: ee(),
          address: ie(),
          name: ie(),
          friends: Y(Ze),
          structs: ne(ie(), ut),
          exposedFunctions: ne(ie(), at),
        });
      function dt(e) {
        return 'object' == typeof e && 'MutableReference' in e
          ? e.MutableReference
          : void 0;
      }
      function ft(e) {
        if ('object' == typeof e && 'Struct' in e) return e;
        const t = (function (e) {
            return 'object' == typeof e && 'Reference' in e
              ? e.Reference
              : void 0;
          })(e),
          r = dt(e);
        return 'object' == typeof t && 'Struct' in t
          ? t
          : 'object' == typeof r && 'Struct' in r
          ? r
          : void 0;
      }
      ne(ie(), lt);
      const ht = te({ apy: ee(), address: ie() }),
        pt =
          (te({ epoch: ie(), apys: Y(ht) }),
          te({ value: ee() }),
          te({
            stakedSuiId: ie(),
            stakeRequestEpoch: ie(),
            stakeActiveEpoch: ie(),
            principal: ie(),
            status: se([J('Active'), J('Pending'), J('Unstaked')]),
            estimatedReward: re(ie()),
          })),
        yt =
          (te({ validatorAddress: ie(), stakingPool: ie(), stakes: Y(pt) }),
          te({
            balance: te({ value: ee() }),
            distribution_counter: ee(),
            current_distribution_amount: ee(),
            stake_subsidy_period_length: ee(),
            stake_subsidy_decrease_rate: ee(),
          })),
        gt =
          (te({ type: ie(), fields: yt }),
          te({ value: ee() }),
          te({
            id: ie(),
            size: ee(),
            head: te({ vec: Y() }),
            tail: te({ vec: Y() }),
          })),
        mt =
          (te({ id: ie(), size: ee() }),
          te({ type: ie(), fields: gt }),
          te({
            exchangeRates: te({ id: ie(), size: ee() }),
            id: ie(),
            pendingStake: ee(),
            pendingPoolTokenWithdraw: ee(),
            pendingTotalSuiWithdraw: ee(),
            poolTokenBalance: ee(),
            rewardsPool: te({ value: ee() }),
            activationEpoch: te({ vec: Y() }),
            deactivationEpoch: te({ vec: Y() }),
            suiBalance: ee(),
          })),
        bt = (te({ type: ie(), fields: mt }), Y(oe([ie(), ie()]))),
        vt =
          (te({ epoch: ie(), validators: bt }),
          te({
            suiAddress: ie(),
            protocolPubkeyBytes: ie(),
            networkPubkeyBytes: ie(),
            workerPubkeyBytes: ie(),
            proofOfPossessionBytes: ie(),
            operationCapId: ie(),
            name: ie(),
            description: ie(),
            imageUrl: ie(),
            projectUrl: ie(),
            p2pAddress: ie(),
            netAddress: ie(),
            primaryAddress: ie(),
            workerAddress: ie(),
            nextEpochProtocolPubkeyBytes: X(ie()),
            nextEpochProofOfPossession: X(ie()),
            nextEpochNetworkPubkeyBytes: X(ie()),
            nextEpochWorkerPubkeyBytes: X(ie()),
            nextEpochNetAddress: X(ie()),
            nextEpochP2pAddress: X(ie()),
            nextEpochPrimaryAddress: X(ie()),
            nextEpochWorkerAddress: X(ie()),
            votingPower: ie(),
            gasPrice: ie(),
            commissionRate: ie(),
            nextEpochStake: ie(),
            nextEpochGasPrice: ie(),
            nextEpochCommissionRate: ie(),
            stakingPoolId: ie(),
            stakingPoolActivationEpoch: X(ie()),
            stakingPoolDeactivationEpoch: X(ie()),
            stakingPoolSuiBalance: ie(),
            rewardsPool: ie(),
            poolTokenBalance: ie(),
            pendingStake: ie(),
            pendingPoolTokenWithdraw: ie(),
            pendingTotalSuiWithdraw: ie(),
            exchangeRatesId: ie(),
            exchangeRatesSize: ie(),
          })),
        wt =
          (te({
            epoch: ie(),
            protocolVersion: ie(),
            systemStateVersion: ie(),
            storageFundTotalObjectStorageRebates: ie(),
            storageFundNonRefundableBalance: ie(),
            referenceGasPrice: ie(),
            safeMode: K(),
            safeModeStorageRewards: ie(),
            safeModeComputationRewards: ie(),
            safeModeStorageRebates: ie(),
            safeModeNonRefundableStorageFee: ie(),
            epochStartTimestampMs: ie(),
            epochDurationMs: ie(),
            stakeSubsidyStartEpoch: ie(),
            maxValidatorCount: ie(),
            minValidatorJoiningStake: ie(),
            validatorLowStakeThreshold: ie(),
            validatorVeryLowStakeThreshold: ie(),
            validatorLowStakeGracePeriod: ie(),
            stakeSubsidyBalance: ie(),
            stakeSubsidyDistributionCounter: ie(),
            stakeSubsidyCurrentDistributionAmount: ie(),
            stakeSubsidyPeriodLength: ie(),
            stakeSubsidyDecreaseRate: ee(),
            totalStake: ie(),
            activeValidators: Y(vt),
            pendingActiveValidatorsId: ie(),
            pendingActiveValidatorsSize: ie(),
            pendingRemovals: Y(ie()),
            stakingPoolMappingsId: ie(),
            stakingPoolMappingsSize: ie(),
            inactivePoolsId: ie(),
            inactivePoolsSize: ie(),
            validatorCandidatesId: ie(),
            validatorCandidatesSize: ie(),
            atRiskValidators: Y(oe([ie(), ie()])),
            validatorReportRecords: Y(oe([ie(), Y(ie())])),
          }),
          te({
            coinType: ie(),
            coinObjectId: ie(),
            version: ie(),
            digest: ie(),
            balance: ie(),
            previousTransaction: ie(),
          })),
        St =
          (te({ data: Y(wt), nextCursor: X(ie()), hasNextPage: K() }),
          te({
            coinType: ie(),
            coinObjectCount: ee(),
            totalBalance: ie(),
            lockedBalance: te({ epochId: re(ee()), number: re(ee()) }),
          }),
          te({ value: ie() }),
          te({
            lastCheckpointId: ie(),
            epochEndTimestamp: ie(),
            protocolVersion: ie(),
            referenceGasPrice: ie(),
            totalStake: ie(),
            storageFundReinvestment: ie(),
            storageCharge: ie(),
            storageRebate: ie(),
            storageFundBalance: ie(),
            stakeSubsidyAmount: ie(),
            totalGasFees: ie(),
            totalStakeRewardsDistributed: ie(),
            leftoverStorageFundInflow: ie(),
          })),
        Tt = te({
          epoch: ie(),
          validators: Y(vt),
          epochTotalTransactions: ie(),
          firstCheckpointId: ie(),
          epochStartTimestamp: ie(),
          endOfEpochInfo: X(St),
          referenceGasPrice: X(ee()),
        }),
        Et =
          (te({ data: Y(Tt), nextCursor: X(ie()), hasNextPage: K() }),
          te({ data: Y(ie()), hasNextPage: K(), nextCursor: X(ie()) }),
          se([J('DynamicField'), J('DynamicObject')])),
        xt = te({ type: ie(), value: H() }),
        At = te({
          name: xt,
          bcsName: ie(),
          type: Et,
          objectType: ie(),
          objectId: ie(),
          version: ee(),
          digest: ie(),
        }),
        jt =
          (te({ data: Y(At), nextCursor: X(ie()), hasNextPage: K() }),
          te({
            computationCost: ie(),
            storageCost: ie(),
            storageRebate: ie(),
            nonRefundableStorageFee: ie(),
          })),
        Mt = (ie(), ie(), te({ digest: Y(ee()) }), H()),
        It =
          (ie(),
          te({
            nextEpochCommittee: Y(oe([ie(), ie()])),
            nextEpochProtocolVersion: ie(),
            epochCommitments: Y(Mt),
          })),
        kt =
          (te({ transaction: ie(), effects: ie() }),
          te({
            epoch: ie(),
            sequenceNumber: ie(),
            digest: ie(),
            networkTotalTransactions: ie(),
            previousDigest: re(ie()),
            epochRollingGasCostSummary: jt,
            timestampMs: ie(),
            endOfEpochData: re(It),
            validatorSignature: ie(),
            transactions: Y(ie()),
            checkpointCommitments: Y(Mt),
          }));
      function Dt(e) {
        if (
          'object' != typeof e ||
          null === e ||
          !('type' in e) ||
          !e.type.startsWith('0x1::option::Option<')
        )
          return e;
      }
      te({ data: Y(kt), nextCursor: X(ie()), hasNextPage: K() }),
        te({
          currentTps: ee(),
          tps30Days: ee(),
          currentCheckpoint: ie(),
          currentEpoch: ie(),
          totalAddresses: ie(),
          totalObjects: ie(),
          totalPackages: ie(),
        }),
        Y(
          te({
            checkpoint: ee(),
            epoch: ee(),
            timestampMs: ee(),
            cumulativeAddresses: ee(),
            cumulativeActiveAddresses: ee(),
            dailyActiveAddresses: ee(),
          }),
        );
      const Nt = '0x1';
      U('0x6'),
        te({
          decimals: ee(),
          name: ie(),
          symbol: ie(),
          description: ie(),
          iconUrl: X(ie()),
          id: X(ie()),
        });
      class Ot {
        static isDelegationSuiObject(e) {
          return 'type' in e && e.type === Ot.SUI_OBJECT_TYPE;
        }
        constructor(e) {
          this.suiObject = e;
        }
        nextRewardUnclaimedEpoch() {
          return this.suiObject.data.fields.next_reward_unclaimed_epoch;
        }
        activeDelegation() {
          return BigInt(Dt(this.suiObject.data.fields.active_delegation) || 0);
        }
        delegateAmount() {
          return this.suiObject.data.fields.delegate_amount;
        }
        endingEpoch() {
          return Dt(this.suiObject.data.fields.ending_epoch);
        }
        validatorAddress() {
          return this.suiObject.data.fields.validator_address;
        }
        isActive() {
          return this.activeDelegation() > 0 && !this.endingEpoch();
        }
        hasUnclaimedRewards(e) {
          return (
            this.nextRewardUnclaimedEpoch() <= e &&
            (this.isActive() || (this.endingEpoch() || 0) > e)
          );
        }
      }
      Ot.SUI_OBJECT_TYPE = '0x2::delegation::Delegation';
      const Ut = { address: '0x2', module: 'object', name: 'ID' },
        _t = { address: Nt, module: 'ascii', name: 'String' },
        Pt = { address: Nt, module: 'string', name: 'String' },
        zt = { address: Nt, module: 'option', name: 'Option' },
        Ct = (e, t) =>
          e.address === t.address && e.module === t.module && e.name === t.name;
      function Bt(e, t) {
        if (void 0 !== t && typeof t !== e)
          throw new Error(`Expect ${t} to be ${e}, received ${typeof t}`);
      }
      const Rt = ['Address', 'Bool', 'U8', 'U16', 'U32', 'U64', 'U128', 'U256'];
      function Lt(e, t) {
        if ('string' == typeof e && Rt.includes(e)) {
          if (e in ['U8', 'U16', 'U32', 'U64', 'U128', 'U256']) Bt('number', t);
          else if ('Bool' === e) Bt('boolean', t);
          else if (
            'Address' === e &&
            (Bt('string', t),
            t &&
              (!(function (e) {
                return /^(0x|0X)?[a-fA-F0-9]+$/.test(e) && e.length % 2 == 0;
              })(t) ||
                (function (e) {
                  return /^(0x|0X)/.test(e) ? (e.length - 2) / 2 : e.length / 2;
                })(r) !== N))
          )
            throw new Error('Invalid Sui Address');
          return e.toLowerCase();
        }
        var r;
        if ('string' == typeof e)
          throw new Error(
            `Unknown pure normalized type ${JSON.stringify(e, null, 2)}`,
          );
        if ('Vector' in e) {
          if ((void 0 === t || 'string' == typeof t) && 'U8' === e.Vector)
            return 'string';
          if (void 0 !== t && !Array.isArray(t))
            throw new Error(`Expect ${t} to be a array, received ${typeof t}`);
          const r = Lt(e.Vector, t ? t[0] : void 0);
          if (void 0 === r) return;
          return `vector<${r}>`;
        }
        if ('Struct' in e) {
          if (Ct(e.Struct, _t)) return 'string';
          if (Ct(e.Struct, Pt)) return 'utf8string';
          if (Ct(e.Struct, Ut)) return 'address';
          if (Ct(e.Struct, zt))
            return Lt({ Vector: e.Struct.typeArguments[0] }, t);
        }
      }
      const Vt = 'vector',
        $t = {
          kind: 'TransactionKind',
          sender: k.ADDRESS,
          gasData: 'GasData',
          expiration: 'TransactionExpiration',
        },
        Gt = {
          enums: {
            'Option<T>': { None: null, Some: 'T' },
            ObjectArg: {
              ImmOrOwned: 'SuiObjectRef',
              Shared: 'SharedObjectRef',
            },
            CallArg: {
              Pure: [Vt, k.U8],
              Object: 'ObjectArg',
              ObjVec: [Vt, 'ObjectArg'],
            },
            TypeTag: {
              bool: null,
              u8: null,
              u64: null,
              u128: null,
              address: null,
              signer: null,
              vector: 'TypeTag',
              struct: 'StructTag',
              u16: null,
              u32: null,
              u256: null,
            },
            TransactionKind: {
              ProgrammableTransaction: 'ProgrammableTransaction',
              ChangeEpoch: null,
              Genesis: null,
              ConsensusCommitPrologue: null,
            },
            TransactionExpiration: { None: null, Epoch: 'unsafe_u64' },
            TransactionData: { V1: 'TransactionDataV1' },
          },
          structs: {
            SuiObjectRef: {
              objectId: k.ADDRESS,
              version: k.U64,
              digest: 'ObjectDigest',
            },
            SharedObjectRef: {
              objectId: k.ADDRESS,
              initialSharedVersion: k.U64,
              mutable: k.BOOL,
            },
            StructTag: {
              address: k.ADDRESS,
              module: k.STRING,
              name: k.STRING,
              typeParams: [Vt, 'TypeTag'],
            },
            GasData: {
              payment: [Vt, 'SuiObjectRef'],
              owner: k.ADDRESS,
              price: k.U64,
              budget: k.U64,
            },
            SenderSignedData: {
              data: 'TransactionData',
              txSignatures: [Vt, [Vt, k.U8]],
            },
            TransactionDataV1: $t,
          },
          aliases: { ObjectDigest: k.BASE58 },
        },
        Ft = new k({
          genericSeparators: ['<', '>'],
          vectorType: 'vector',
          addressLength: 32,
          addressEncoding: 'hex',
          types: Gt,
        });
      Ft.registerType(
        'utf8string',
        (e, t) => {
          const r = Array.from(new TextEncoder().encode(t));
          return e.writeVec(r, (e, t) => e.write8(t));
        },
        e => {
          let t = e.readVec(e => e.read8());
          return new TextDecoder().decode(new Uint8Array(t));
        },
      ),
        Ft.registerType(
          'unsafe_u64',
          (e, t) => e.write64(t),
          e => Number.parseInt(e.read64(), 10),
        );
      const Wt = /^vector<(.+)>$/,
        Qt = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
      class Ht {
        static parseFromStr(e, t = !1) {
          if ('address' === e) return { address: null };
          if ('bool' === e) return { bool: null };
          if ('u8' === e) return { u8: null };
          if ('u16' === e) return { u16: null };
          if ('u32' === e) return { u32: null };
          if ('u64' === e) return { u64: null };
          if ('u128' === e) return { u128: null };
          if ('u256' === e) return { u256: null };
          if ('signer' === e) return { signer: null };
          const r = e.match(Wt);
          if (r) return { vector: Ht.parseFromStr(r[1], t) };
          const n = e.match(Qt);
          if (n)
            return {
              struct: {
                address: t ? O(n[1]) : n[1],
                module: n[2],
                name: n[3],
                typeParams:
                  void 0 === n[5] ? [] : Ht.parseStructTypeArgs(n[5], t),
              },
            };
          throw new Error(
            `Encountered unexpected token when parsing type args for ${e}`,
          );
        }
        static parseStructTypeArgs(e, t = !1) {
          return D(e).map(e => Ht.parseFromStr(e, t));
        }
        static tagToString(e) {
          if ('bool' in e) return 'bool';
          if ('u8' in e) return 'u8';
          if ('u16' in e) return 'u16';
          if ('u32' in e) return 'u32';
          if ('u64' in e) return 'u64';
          if ('u128' in e) return 'u128';
          if ('u256' in e) return 'u256';
          if ('address' in e) return 'address';
          if ('signer' in e) return 'signer';
          if ('vector' in e) return `vector<${Ht.tagToString(e.vector)}>`;
          if ('struct' in e) {
            const t = e.struct,
              r = t.typeParams.map(Ht.tagToString).join(', ');
            return `${t.address}::${t.module}::${t.name}${r ? `<${r}>` : ''}`;
          }
          throw new Error('Invalid TypeTag');
        }
      }
      const Yt = 'Argument',
        Kt = 'vector',
        qt = 'TypeTag',
        Jt = 'ProgrammableMoveCall',
        Zt = 'Transaction',
        Xt = 'CompressedSignature',
        er = 'PublicKey',
        tr = 'MultiSigPublicKey',
        rr = 'MultiSigPkMap',
        nr = 'EnumKind',
        ir = [nr, Zt],
        or = [nr, Yt],
        sr = 'SimpleProgrammableMoveCall',
        ar = new k(Ft);
      function cr(e, t, r) {
        e.registerType(
          t,
          function (e, t, n, i) {
            if (t.length !== r)
              throw new Error(
                `Expected fixed array of length ${r}, got ${t.length}`,
              );
            if (1 !== n.length)
              throw new Error(
                `Expected one type parameter in a fixed array, got ${n.length}`,
              );
            let [o] = 'string' == typeof n[0] ? [n[0], []] : n[0];
            for (let r of t)
              this.getTypeInterface(o)._encodeRaw.call(this, e, r, n, i);
            return e;
          },
          function (e, t, n) {
            if (1 !== t.length)
              throw new Error(
                `Expected one type parameter in a fixed array, got ${t.length}`,
              );
            let i = [],
              [o] = 'string' == typeof t[0] ? [t[0], []] : t[0];
            for (let s = 0; s < r; s++)
              i.push(this.getTypeInterface(o)._decodeRaw.call(this, e, t, n));
            return i;
          },
        );
      }
      cr(ar, 'FixedArray[64]', 64),
        cr(ar, 'FixedArray[33]', 33),
        cr(ar, 'FixedArray[32]', 32),
        ar
          .registerStructType('ProgrammableTransaction', {
            inputs: [Kt, 'CallArg'],
            transactions: [Kt, ir],
          })
          .registerEnumType(Yt, {
            GasCoin: null,
            Input: { index: k.U16 },
            Result: { index: k.U16 },
            NestedResult: { index: k.U16, resultIndex: k.U16 },
          })
          .registerStructType(Jt, {
            package: k.ADDRESS,
            module: k.STRING,
            function: k.STRING,
            type_arguments: [Kt, qt],
            arguments: [Kt, or],
          })
          .registerEnumType(Zt, {
            MoveCall: sr,
            TransferObjects: { objects: [Kt, or], address: or },
            SplitCoins: { coin: or, amounts: [Kt, or] },
            MergeCoins: { destination: or, sources: [Kt, or] },
            Publish: {
              modules: [Kt, [Kt, k.U8]],
              dependencies: [Kt, k.ADDRESS],
            },
            MakeMoveVec: { type: ['Option', qt], objects: [Kt, or] },
            Upgrade: {
              modules: [Kt, [Kt, k.U8]],
              dependencies: [Kt, k.ADDRESS],
              packageId: k.ADDRESS,
              ticket: or,
            },
          })
          .registerEnumType(Xt, {
            ED25519: ['FixedArray[64]', 'u8'],
            Secp256k1: ['FixedArray[64]', 'u8'],
            Secp256r1: ['FixedArray[64]', 'u8'],
          })
          .registerEnumType(er, {
            ED25519: ['FixedArray[32]', 'u8'],
            Secp256k1: ['FixedArray[33]', 'u8'],
            Secp256r1: ['FixedArray[33]', 'u8'],
          })
          .registerStructType(rr, { pubKey: er, weight: k.U8 })
          .registerStructType(tr, { pk_map: [Kt, rr], threshold: k.U16 })
          .registerStructType('MultiSig', {
            sigs: [Kt, Xt],
            bitmap: k.U16,
            multisig_pk: tr,
          }),
        ar.registerType(
          [nr, 'T'],
          function (e, t, r, n) {
            const i = { [t.kind]: t },
              [o] = r;
            return this.getTypeInterface(o)._encodeRaw.call(this, e, i, r, n);
          },
          function (e, t, r) {
            const [n] = t,
              i = this.getTypeInterface(n)._decodeRaw.call(this, e, t, r),
              o = Object.keys(i)[0];
            return { kind: o, ...i[o] };
          },
          e => {
            if ('object' != typeof e && !('kind' in e))
              throw new Error(
                `EnumKind: Missing property "kind" in the input ${JSON.stringify(
                  e,
                )}`,
              );
            return !0;
          },
        ),
        ar.registerType(
          sr,
          function (e, t, r, n) {
            const [i, o, s] = t.target.split('::'),
              a = t.typeArguments.map(e => Ht.parseFromStr(e, !0));
            return this.getTypeInterface(Jt)._encodeRaw.call(
              this,
              e,
              {
                package: O(i),
                module: o,
                function: s,
                type_arguments: a,
                arguments: t.arguments,
              },
              r,
              n,
            );
          },
          function (e, t, r) {
            let n = ar.getTypeInterface(Jt)._decodeRaw.call(this, e, t, r);
            return {
              target: [n.package, n.module, n.function].join('::'),
              arguments: n.arguments,
              typeArguments: n.type_arguments.map(Ht.tagToString),
            };
          },
          e => 3 === e.target.split('::').length,
        );
      const ur = se([
          te({ ImmOrOwned: de }),
          te({
            Shared: te({
              objectId: ie(),
              initialSharedVersion: se([q(), ie()]),
              mutable: K(),
            }),
          }),
        ]),
        lr = te({ Pure: Y(q()) }),
        dr = te({ Object: ur }),
        fr = se([lr, dr]),
        hr = (e, t) => ({
          Pure: Array.from(
            e instanceof Uint8Array
              ? e
              : ar.ser(t, e, { maxSize: 1 / 0 }).toBytes(),
          ),
        }),
        pr = ({ objectId: e, digest: t, version: r }) => ({
          Object: { ImmOrOwned: { digest: t, version: r, objectId: O(e) } },
        }),
        yr = ({ objectId: e, mutable: t, initialSharedVersion: r }) => ({
          Object: {
            Shared: { mutable: t, initialSharedVersion: r, objectId: O(e) },
          },
        });
      const gr = Symbol('transaction-argument-type'),
        mr = te({
          kind: J('Input'),
          index: q(),
          value: re(H()),
          type: re(se([J('pure'), J('object')])),
        }),
        br = [
          mr,
          te({ kind: J('GasCoin') }),
          te({ kind: J('Result'), index: q() }),
          te({ kind: J('NestedResult'), index: q(), resultIndex: q() }),
        ],
        vr = se([...br]),
        wr = se([...br]);
      wr[gr] = { kind: 'object' };
      const Sr = e => {
          const t = se([...br]);
          return (t[gr] = { kind: 'pure', type: e }), t;
        },
        Tr = te({
          kind: J('MoveCall'),
          target: Q('target', ie().validator),
          typeArguments: Y(ie()),
          arguments: Y(vr),
        }),
        Er = te({
          kind: J('TransferObjects'),
          objects: Y(wr),
          address: Sr(k.ADDRESS),
        }),
        xr = te({ kind: J('SplitCoins'), coin: wr, amounts: Y(Sr('u64')) }),
        Ar = te({ kind: J('MergeCoins'), destination: wr, sources: Y(wr) }),
        jr = te({
          kind: J('MakeMoveVec'),
          type: re(
            ((Mr = ne(ie(), ae())),
            se([te({ None: se([J(!0), J(null)]) }), te({ Some: Mr })])),
          ),
          objects: Y(wr),
        });
      var Mr;
      const Ir = te({
        kind: J('Publish'),
        modules: Y(Y(q())),
        dependencies: Y(ie()),
      });
      var kr;
      !(function (e) {
        (e[(e.COMPATIBLE = 0)] = 'COMPATIBLE'),
          (e[(e.ADDITIVE = 128)] = 'ADDITIVE'),
          (e[(e.DEP_ONLY = 192)] = 'DEP_ONLY');
      })(kr || (kr = {}));
      const Dr = [
          Tr,
          Er,
          xr,
          Ar,
          Ir,
          te({
            kind: J('Upgrade'),
            modules: Y(Y(q())),
            dependencies: Y(ie()),
            packageId: ie(),
            ticket: wr,
          }),
          jr,
        ],
        Nr = se([...Dr]);
      function Or(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error(`Wrong positive integer: ${e}`);
      }
      function Ur(e, ...t) {
        if (!(e instanceof Uint8Array)) throw new Error('Expected Uint8Array');
        if (t.length > 0 && !t.includes(e.length))
          throw new Error(
            `Expected Uint8Array of length ${t}, not of length=${e.length}`,
          );
      }
      const _r = {
          number: Or,
          bool: function (e) {
            if ('boolean' != typeof e)
              throw new Error(`Expected boolean, not ${e}`);
          },
          bytes: Ur,
          hash: function (e) {
            if ('function' != typeof e || 'function' != typeof e.create)
              throw new Error(
                'Hash should be wrapped by utils.wrapConstructor',
              );
            Or(e.outputLen), Or(e.blockLen);
          },
          exists: function (e, t = !0) {
            if (e.destroyed)
              throw new Error('Hash instance has been destroyed');
            if (t && e.finished)
              throw new Error('Hash#digest() has already been called');
          },
          output: function (e, t) {
            Ur(e);
            const r = t.outputLen;
            if (e.length < r)
              throw new Error(
                `digestInto() expects output buffer of length at least ${r}`,
              );
          },
        },
        Pr =
          ('object' == typeof globalThis &&
            'crypto' in globalThis &&
            globalThis.crypto,
          e => e instanceof Uint8Array),
        zr = e =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw new Error('Non little-endian hardware is not supported');
      function Cr(e) {
        if (
          ('string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e)
                throw new Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          !Pr(e))
        )
          throw new Error('expected Uint8Array, got ' + typeof e);
        return e;
      }
      Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      class Br {
        clone() {
          return this._cloneInto();
        }
      }
      const Rr = new Uint8Array([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3,
        11,
        8,
        12,
        0,
        5,
        2,
        15,
        13,
        10,
        14,
        3,
        6,
        7,
        1,
        9,
        4,
        7,
        9,
        3,
        1,
        13,
        12,
        11,
        14,
        2,
        6,
        5,
        10,
        4,
        0,
        15,
        8,
        9,
        0,
        5,
        7,
        2,
        4,
        10,
        15,
        14,
        1,
        11,
        12,
        6,
        8,
        3,
        13,
        2,
        12,
        6,
        10,
        0,
        11,
        8,
        3,
        4,
        13,
        7,
        5,
        15,
        14,
        1,
        9,
        12,
        5,
        1,
        15,
        14,
        13,
        4,
        10,
        0,
        7,
        6,
        3,
        9,
        2,
        8,
        11,
        13,
        11,
        7,
        14,
        12,
        1,
        3,
        9,
        5,
        0,
        15,
        4,
        8,
        6,
        2,
        10,
        6,
        15,
        14,
        9,
        11,
        3,
        0,
        8,
        12,
        2,
        13,
        7,
        1,
        4,
        10,
        5,
        10,
        2,
        8,
        4,
        7,
        6,
        1,
        5,
        15,
        11,
        9,
        14,
        3,
        12,
        13,
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3,
      ]);
      class Lr extends Br {
        constructor(e, t, r = {}, n, i, o) {
          if (
            (super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.length = 0),
            (this.pos = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            _r.number(e),
            _r.number(t),
            _r.number(n),
            t < 0 || t > n)
          )
            throw new Error('outputLen bigger than keyLen');
          if (void 0 !== r.key && (r.key.length < 1 || r.key.length > n))
            throw new Error(`key must be up 1..${n} byte long or undefined`);
          if (void 0 !== r.salt && r.salt.length !== i)
            throw new Error(`salt must be ${i} byte long or undefined`);
          if (void 0 !== r.personalization && r.personalization.length !== o)
            throw new Error(
              `personalization must be ${o} byte long or undefined`,
            );
          this.buffer32 = zr((this.buffer = new Uint8Array(e)));
        }
        update(e) {
          _r.exists(this);
          const { blockLen: t, buffer: r, buffer32: n } = this,
            i = (e = Cr(e)).length,
            o = e.byteOffset,
            s = e.buffer;
          for (let a = 0; a < i; ) {
            this.pos === t && (this.compress(n, 0, !1), (this.pos = 0));
            const c = Math.min(t - this.pos, i - a),
              u = o + a;
            if (c !== t || u % 4 || !(a + c < i))
              r.set(e.subarray(a, a + c), this.pos),
                (this.pos += c),
                (this.length += c),
                (a += c);
            else {
              const e = new Uint32Array(s, u, Math.floor((i - a) / 4));
              for (let r = 0; a + t < i; r += n.length, a += t)
                (this.length += t), this.compress(e, r, !1);
            }
          }
          return this;
        }
        digestInto(e) {
          _r.exists(this), _r.output(e, this);
          const { pos: t, buffer32: r } = this;
          (this.finished = !0),
            this.buffer.subarray(t).fill(0),
            this.compress(r, 0, !0);
          const n = zr(e);
          this.get().forEach((e, t) => (n[t] = e));
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          const {
            buffer: t,
            length: r,
            finished: n,
            destroyed: i,
            outputLen: o,
            pos: s,
          } = this;
          return (
            e || (e = new this.constructor({ dkLen: o })),
            e.set(...this.get()),
            (e.length = r),
            (e.finished = n),
            (e.destroyed = i),
            (e.outputLen = o),
            e.buffer.set(t),
            (e.pos = s),
            e
          );
        }
      }
      const Vr = BigInt(2 ** 32 - 1),
        $r = BigInt(32);
      function Gr(e, t = !1) {
        return t
          ? { h: Number(e & Vr), l: Number((e >> $r) & Vr) }
          : { h: 0 | Number((e >> $r) & Vr), l: 0 | Number(e & Vr) };
      }
      const Fr = {
          fromBig: Gr,
          split: function (e, t = !1) {
            let r = new Uint32Array(e.length),
              n = new Uint32Array(e.length);
            for (let i = 0; i < e.length; i++) {
              const { h: o, l: s } = Gr(e[i], t);
              [r[i], n[i]] = [o, s];
            }
            return [r, n];
          },
          toBig: (e, t) => (BigInt(e >>> 0) << $r) | BigInt(t >>> 0),
          shrSH: (e, t, r) => e >>> r,
          shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
          rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
          rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
          rotr32H: (e, t) => t,
          rotr32L: (e, t) => e,
          rotlSH: (e, t, r) => (e << r) | (t >>> (32 - r)),
          rotlSL: (e, t, r) => (t << r) | (e >>> (32 - r)),
          rotlBH: (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
          rotlBL: (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
          add: function (e, t, r, n) {
            const i = (t >>> 0) + (n >>> 0);
            return { h: (e + r + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
          },
          add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
          add3H: (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
          add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
          add4H: (e, t, r, n, i) => (t + r + n + i + ((e / 2 ** 32) | 0)) | 0,
          add5H: (e, t, r, n, i, o) =>
            (t + r + n + i + o + ((e / 2 ** 32) | 0)) | 0,
          add5L: (e, t, r, n, i) =>
            (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
        },
        Wr = new Uint32Array([
          4089235720,
          1779033703,
          2227873595,
          3144134277,
          4271175723,
          1013904242,
          1595750129,
          2773480762,
          2917565137,
          1359893119,
          725511199,
          2600822924,
          4215389547,
          528734635,
          327033209,
          1541459225,
        ]),
        Qr = new Uint32Array(32);
      function Hr(e, t, r, n, i, o) {
        const s = i[o],
          a = i[o + 1];
        let c = Qr[2 * e],
          u = Qr[2 * e + 1],
          l = Qr[2 * t],
          d = Qr[2 * t + 1],
          f = Qr[2 * r],
          h = Qr[2 * r + 1],
          p = Qr[2 * n],
          y = Qr[2 * n + 1],
          g = Fr.add3L(c, l, s);
        (u = Fr.add3H(g, u, d, a)),
          (c = 0 | g),
          ({ Dh: y, Dl: p } = { Dh: y ^ u, Dl: p ^ c }),
          ({ Dh: y, Dl: p } = { Dh: Fr.rotr32H(y, p), Dl: Fr.rotr32L(y, p) }),
          ({ h, l: f } = Fr.add(h, f, y, p)),
          ({ Bh: d, Bl: l } = { Bh: d ^ h, Bl: l ^ f }),
          ({ Bh: d, Bl: l } = {
            Bh: Fr.rotrSH(d, l, 24),
            Bl: Fr.rotrSL(d, l, 24),
          }),
          (Qr[2 * e] = c),
          (Qr[2 * e + 1] = u),
          (Qr[2 * t] = l),
          (Qr[2 * t + 1] = d),
          (Qr[2 * r] = f),
          (Qr[2 * r + 1] = h),
          (Qr[2 * n] = p),
          (Qr[2 * n + 1] = y);
      }
      function Yr(e, t, r, n, i, o) {
        const s = i[o],
          a = i[o + 1];
        let c = Qr[2 * e],
          u = Qr[2 * e + 1],
          l = Qr[2 * t],
          d = Qr[2 * t + 1],
          f = Qr[2 * r],
          h = Qr[2 * r + 1],
          p = Qr[2 * n],
          y = Qr[2 * n + 1],
          g = Fr.add3L(c, l, s);
        (u = Fr.add3H(g, u, d, a)),
          (c = 0 | g),
          ({ Dh: y, Dl: p } = { Dh: y ^ u, Dl: p ^ c }),
          ({ Dh: y, Dl: p } = {
            Dh: Fr.rotrSH(y, p, 16),
            Dl: Fr.rotrSL(y, p, 16),
          }),
          ({ h, l: f } = Fr.add(h, f, y, p)),
          ({ Bh: d, Bl: l } = { Bh: d ^ h, Bl: l ^ f }),
          ({ Bh: d, Bl: l } = {
            Bh: Fr.rotrBH(d, l, 63),
            Bl: Fr.rotrBL(d, l, 63),
          }),
          (Qr[2 * e] = c),
          (Qr[2 * e + 1] = u),
          (Qr[2 * t] = l),
          (Qr[2 * t + 1] = d),
          (Qr[2 * r] = f),
          (Qr[2 * r + 1] = h),
          (Qr[2 * n] = p),
          (Qr[2 * n + 1] = y);
      }
      class Kr extends Lr {
        constructor(e = {}) {
          super(128, void 0 === e.dkLen ? 64 : e.dkLen, e, 64, 16, 16),
            (this.v0l = 0 | Wr[0]),
            (this.v0h = 0 | Wr[1]),
            (this.v1l = 0 | Wr[2]),
            (this.v1h = 0 | Wr[3]),
            (this.v2l = 0 | Wr[4]),
            (this.v2h = 0 | Wr[5]),
            (this.v3l = 0 | Wr[6]),
            (this.v3h = 0 | Wr[7]),
            (this.v4l = 0 | Wr[8]),
            (this.v4h = 0 | Wr[9]),
            (this.v5l = 0 | Wr[10]),
            (this.v5h = 0 | Wr[11]),
            (this.v6l = 0 | Wr[12]),
            (this.v6h = 0 | Wr[13]),
            (this.v7l = 0 | Wr[14]),
            (this.v7h = 0 | Wr[15]);
          const t = e.key ? e.key.length : 0;
          if (
            ((this.v0l ^= this.outputLen | (t << 8) | 65536 | (1 << 24)),
            e.salt)
          ) {
            const t = zr(Cr(e.salt));
            (this.v4l ^= t[0]),
              (this.v4h ^= t[1]),
              (this.v5l ^= t[2]),
              (this.v5h ^= t[3]);
          }
          if (e.personalization) {
            const t = zr(Cr(e.personalization));
            (this.v6l ^= t[0]),
              (this.v6h ^= t[1]),
              (this.v7l ^= t[2]),
              (this.v7h ^= t[3]);
          }
          if (e.key) {
            const t = new Uint8Array(this.blockLen);
            t.set(Cr(e.key)), this.update(t);
          }
        }
        get() {
          let {
            v0l: e,
            v0h: t,
            v1l: r,
            v1h: n,
            v2l: i,
            v2h: o,
            v3l: s,
            v3h: a,
            v4l: c,
            v4h: u,
            v5l: l,
            v5h: d,
            v6l: f,
            v6h: h,
            v7l: p,
            v7h: y,
          } = this;
          return [e, t, r, n, i, o, s, a, c, u, l, d, f, h, p, y];
        }
        set(e, t, r, n, i, o, s, a, c, u, l, d, f, h, p, y) {
          (this.v0l = 0 | e),
            (this.v0h = 0 | t),
            (this.v1l = 0 | r),
            (this.v1h = 0 | n),
            (this.v2l = 0 | i),
            (this.v2h = 0 | o),
            (this.v3l = 0 | s),
            (this.v3h = 0 | a),
            (this.v4l = 0 | c),
            (this.v4h = 0 | u),
            (this.v5l = 0 | l),
            (this.v5h = 0 | d),
            (this.v6l = 0 | f),
            (this.v6h = 0 | h),
            (this.v7l = 0 | p),
            (this.v7h = 0 | y);
        }
        compress(e, t, r) {
          this.get().forEach((e, t) => (Qr[t] = e)), Qr.set(Wr, 16);
          let { h: n, l: i } = Fr.fromBig(BigInt(this.length));
          (Qr[24] = Wr[8] ^ i),
            (Qr[25] = Wr[9] ^ n),
            r && ((Qr[28] = ~Qr[28]), (Qr[29] = ~Qr[29]));
          let o = 0;
          const s = Rr;
          for (let r = 0; r < 12; r++)
            Hr(0, 4, 8, 12, e, t + 2 * s[o++]),
              Yr(0, 4, 8, 12, e, t + 2 * s[o++]),
              Hr(1, 5, 9, 13, e, t + 2 * s[o++]),
              Yr(1, 5, 9, 13, e, t + 2 * s[o++]),
              Hr(2, 6, 10, 14, e, t + 2 * s[o++]),
              Yr(2, 6, 10, 14, e, t + 2 * s[o++]),
              Hr(3, 7, 11, 15, e, t + 2 * s[o++]),
              Yr(3, 7, 11, 15, e, t + 2 * s[o++]),
              Hr(0, 5, 10, 15, e, t + 2 * s[o++]),
              Yr(0, 5, 10, 15, e, t + 2 * s[o++]),
              Hr(1, 6, 11, 12, e, t + 2 * s[o++]),
              Yr(1, 6, 11, 12, e, t + 2 * s[o++]),
              Hr(2, 7, 8, 13, e, t + 2 * s[o++]),
              Yr(2, 7, 8, 13, e, t + 2 * s[o++]),
              Hr(3, 4, 9, 14, e, t + 2 * s[o++]),
              Yr(3, 4, 9, 14, e, t + 2 * s[o++]);
          (this.v0l ^= Qr[0] ^ Qr[16]),
            (this.v0h ^= Qr[1] ^ Qr[17]),
            (this.v1l ^= Qr[2] ^ Qr[18]),
            (this.v1h ^= Qr[3] ^ Qr[19]),
            (this.v2l ^= Qr[4] ^ Qr[20]),
            (this.v2h ^= Qr[5] ^ Qr[21]),
            (this.v3l ^= Qr[6] ^ Qr[22]),
            (this.v3h ^= Qr[7] ^ Qr[23]),
            (this.v4l ^= Qr[8] ^ Qr[24]),
            (this.v4h ^= Qr[9] ^ Qr[25]),
            (this.v5l ^= Qr[10] ^ Qr[26]),
            (this.v5h ^= Qr[11] ^ Qr[27]),
            (this.v6l ^= Qr[12] ^ Qr[28]),
            (this.v6h ^= Qr[13] ^ Qr[29]),
            (this.v7l ^= Qr[14] ^ Qr[30]),
            (this.v7h ^= Qr[15] ^ Qr[31]),
            Qr.fill(0);
        }
        destroy() {
          (this.destroyed = !0),
            this.buffer32.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      !(function (e) {
        const t = (t, r) => e(r).update(Cr(t)).digest(),
          r = e({});
        (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = t => e(t));
      })(e => new Kr(e));
      const qr = re(
          X(se([te({ Epoch: q() }), te({ None: se([J(!0), J(null)]) })])),
        ),
        Jr = Q('StringEncodedBigint', e => {
          if (!['string', 'number', 'bigint'].includes(typeof e)) return !1;
          try {
            return BigInt(e), !0;
          } catch {
            return !1;
          }
        }),
        Zr = te({
          budget: re(Jr),
          price: re(Jr),
          payment: re(Y(de)),
          owner: re(ie()),
        });
      te({
        version: J(1),
        sender: re(ie()),
        expiration: qr,
        gasConfig: Zr,
        inputs: Y(mr),
        transactions: Y(Nr),
      });
      var Xr,
        en,
        tn,
        rn = function (e, t, r, n) {
          if ('a' === r && !n)
            throw new TypeError(
              'Private accessor was defined without a getter',
            );
          if ('function' == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it',
            );
          return 'm' === r ? n : 'a' === r ? n.call(e) : n ? n.value : t.get(e);
        };
      const nn = {
        maxPureArgumentSize: 16384,
        maxTxGas: 5e10,
        maxGasObjects: 256,
        maxTxSizeBytes: 131072,
      };
      function on(e) {
        if (!e.client && !e.provider)
          throw new Error(
            'No provider passed to Transaction#build, but transaction data was not sufficient to build offline.',
          );
        return e.client ?? e.provider;
      }
      const sn = Symbol.for('@mysten/transaction'),
        an = {
          maxTxGas: 'max_tx_gas',
          maxGasObjects: 'max_gas_payment_objects',
          maxTxSizeBytes: 'max_tx_size_bytes',
          maxPureArgumentSize: 'max_pure_argument_size',
        };
      function cn(e) {
        return !!e && 'object' == typeof e && !0 === e[sn];
      }
      class un {
        static is(e) {
          return !!e && 'object' == typeof e && !0 === e[sn];
        }
        static fromKind(e) {
          const t = new un();
          return (
            TransactionBlock_classPrivateFieldSet(
              t,
              en,
              TransactionBlockDataBuilder.fromKindBytes(
                'string' == typeof e ? fromB64(e) : e,
              ),
              'f',
            ),
            t
          );
        }
        static from(e) {
          const t = new un();
          return (
            'string' == typeof e && e.startsWith('{')
              ? TransactionBlock_classPrivateFieldSet(
                  t,
                  en,
                  TransactionBlockDataBuilder.restore(JSON.parse(e)),
                  'f',
                )
              : TransactionBlock_classPrivateFieldSet(
                  t,
                  en,
                  TransactionBlockDataBuilder.fromBytes(
                    'string' == typeof e ? fromB64(e) : e,
                  ),
                  'f',
                ),
            t
          );
        }
        static get Transactions() {
          return Transactions;
        }
        static get Inputs() {
          return Inputs;
        }
        setSender(e) {
          rn(this, en, 'f').sender = e;
        }
        setSenderIfNotSet(e) {
          rn(this, en, 'f').sender || (rn(this, en, 'f').sender = e);
        }
        setExpiration(e) {
          rn(this, en, 'f').expiration = e;
        }
        setGasPrice(e) {
          rn(this, en, 'f').gasConfig.price = String(e);
        }
        setGasBudget(e) {
          rn(this, en, 'f').gasConfig.budget = String(e);
        }
        setGasOwner(e) {
          rn(this, en, 'f').gasConfig.owner = e;
        }
        setGasPayment(e) {
          rn(this, en, 'f').gasConfig.payment = e.map(e =>
            mask(e, SuiObjectRef),
          );
        }
        get blockData() {
          return rn(this, en, 'f').snapshot();
        }
        get [((en = new WeakMap()), (Xr = new WeakSet()), sn)]() {
          return !0;
        }
        constructor(e) {
          Xr.add(this),
            en.set(this, void 0),
            TransactionBlock_classPrivateFieldSet(
              this,
              en,
              new TransactionBlockDataBuilder(e ? e.blockData : void 0),
              'f',
            );
        }
        get gas() {
          return { kind: 'GasCoin' };
        }
        object(e) {
          const t = getIdFromCallArg(e);
          return (
            rn(this, en, 'f').inputs.find(
              e => 'object' === e.type && t === getIdFromCallArg(e.value),
            ) ??
            rn(this, Xr, 'm', _TransactionBlock_input).call(this, 'object', e)
          );
        }
        objectRef(...e) {
          return this.object(Inputs.ObjectRef(...e));
        }
        sharedObjectRef(...e) {
          return this.object(Inputs.SharedObjectRef(...e));
        }
        pure(e, t) {
          return rn(this, Xr, 'm', _TransactionBlock_input).call(
            this,
            'pure',
            e instanceof Uint8Array
              ? Inputs.Pure(e)
              : t
              ? Inputs.Pure(e, t)
              : e,
          );
        }
        add(e) {
          return (function (e) {
            const t = [],
              r = r =>
                t[r] ??
                (t[r] = { kind: 'NestedResult', index: e, resultIndex: r });
            return new Proxy(
              { kind: 'Result', index: e },
              {
                set() {
                  throw new Error(
                    'The transaction result is a proxy, and does not support setting properties directly',
                  );
                },
                get(e, t) {
                  if (t in e) return Reflect.get(e, t);
                  if (t === Symbol.iterator)
                    return function* () {
                      for (;;) yield r(0);
                    };
                  if ('symbol' == typeof t) return;
                  const n = parseInt(t, 10);
                  return Number.isNaN(n) || n < 0 ? void 0 : r(n);
                },
              },
            );
          })(rn(this, en, 'f').transactions.push(e) - 1);
        }
        splitCoins(...e) {
          return this.add(Transactions.SplitCoins(...e));
        }
        mergeCoins(...e) {
          return this.add(Transactions.MergeCoins(...e));
        }
        publish(...e) {
          return this.add(Transactions.Publish(...e));
        }
        upgrade(...e) {
          return this.add(Transactions.Upgrade(...e));
        }
        moveCall(...e) {
          return this.add(Transactions.MoveCall(...e));
        }
        transferObjects(...e) {
          return this.add(Transactions.TransferObjects(...e));
        }
        makeMoveVec(...e) {
          return this.add(Transactions.MakeMoveVec(...e));
        }
        serialize() {
          return JSON.stringify(rn(this, en, 'f').snapshot());
        }
        async build(e = {}) {
          return (
            await rn(this, Xr, 'm', _TransactionBlock_prepare).call(this, e),
            rn(this, en, 'f').build({
              maxSizeBytes: rn(this, Xr, 'm', tn).call(
                this,
                'maxTxSizeBytes',
                e,
              ),
              onlyTransactionKind: e.onlyTransactionKind,
            })
          );
        }
        async getDigest(e = {}) {
          return (
            await rn(this, Xr, 'm', _TransactionBlock_prepare).call(this, e),
            rn(this, en, 'f').getDigest()
          );
        }
      }
      function ln(e) {
        return 'function' == typeof e;
      }
      function dn(e) {
        return function (t) {
          if (
            (function (e) {
              return ln(null == e ? void 0 : e.lift);
            })(t)
          )
            return t.lift(function (t) {
              try {
                return e(t, this);
              } catch (e) {
                this.error(e);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
      (tn = function (e, { protocolConfig: t, limits: r }) {
        if (r && 'number' == typeof r[e]) return r[e];
        if (!t) return nn[e];
        const n = t?.attributes[an[e]];
        if (!n) throw new Error(`Missing expected protocol config: "${an[e]}"`);
        const i = 'u64' in n ? n.u64 : 'u32' in n ? n.u32 : n.f64;
        if (!i)
          throw new Error(
            `Unexpected protocol config value found for: "${an[e]}"`,
          );
        return Number(i);
      }),
        BigInt(1e9),
        U('0x6'),
        U('0x5');
      var fn = function (e, t) {
        return (
          (fn =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }),
          fn(e, t)
        );
      };
      function hn(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Class extends value ' +
              String(t) +
              ' is not a constructor or null',
          );
        function r() {
          this.constructor = e;
        }
        fn(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      function pn(e, t) {
        var r,
          n,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(a) {
          return function (c) {
            return (function (a) {
              if (r) throw new TypeError('Generator is already executing.');
              for (; o && ((o = 0), a[0] && (s = 0)), s; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & a[0]
                          ? n.return
                          : a[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, a[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                    case 0:
                    case 1:
                      i = a;
                      break;
                    case 4:
                      return s.label++, { value: a[1], done: !1 };
                    case 5:
                      s.label++, (n = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== a[0] && 2 !== a[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                        s.label = a[1];
                        break;
                      }
                      if (6 === a[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = a);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(a);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  a = t.call(e, s);
                } catch (e) {
                  (a = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, c]);
          };
        }
      }
      function yn(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
        );
      }
      function gn(e, t) {
        var r = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
            s.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function mn(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function bn(e) {
        return this instanceof bn ? ((this.v = e), this) : new bn(e);
      }
      function vn(e) {
        var t = e(function (e) {
          Error.call(e), (e.stack = new Error().stack);
        });
        return (
          (t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t),
          t
        );
      }
      Object.create,
        Object.create,
        'function' == typeof SuppressedError && SuppressedError;
      var wn = vn(function (e) {
        return function (t) {
          e(this),
            (this.message = t
              ? t.length +
                ' errors occurred during unsubscription:\n' +
                t
                  .map(function (e, t) {
                    return t + 1 + ') ' + e.toString();
                  })
                  .join('\n  ')
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = t);
        };
      });
      function Sn(e, t) {
        if (e) {
          var r = e.indexOf(t);
          0 <= r && e.splice(r, 1);
        }
      }
      var Tn = (function () {
          function e(e) {
            (this.initialTeardown = e),
              (this.closed = !1),
              (this._parentage = null),
              (this._finalizers = null);
          }
          return (
            (e.prototype.unsubscribe = function () {
              var e, t, r, n, i;
              if (!this.closed) {
                this.closed = !0;
                var o = this._parentage;
                if (o)
                  if (((this._parentage = null), Array.isArray(o)))
                    try {
                      for (var s = yn(o), a = s.next(); !a.done; a = s.next())
                        a.value.remove(this);
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        a && !a.done && (t = s.return) && t.call(s);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                  else o.remove(this);
                var c = this.initialTeardown;
                if (ln(c))
                  try {
                    c();
                  } catch (e) {
                    i = e instanceof wn ? e.errors : [e];
                  }
                var u = this._finalizers;
                if (u) {
                  this._finalizers = null;
                  try {
                    for (var l = yn(u), d = l.next(); !d.done; d = l.next()) {
                      var f = d.value;
                      try {
                        An(f);
                      } catch (e) {
                        (i = null != i ? i : []),
                          e instanceof wn
                            ? (i = mn(mn([], gn(i)), gn(e.errors)))
                            : i.push(e);
                      }
                    }
                  } catch (e) {
                    r = { error: e };
                  } finally {
                    try {
                      d && !d.done && (n = l.return) && n.call(l);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
                if (i) throw new wn(i);
              }
            }),
            (e.prototype.add = function (t) {
              var r;
              if (t && t !== this)
                if (this.closed) An(t);
                else {
                  if (t instanceof e) {
                    if (t.closed || t._hasParent(this)) return;
                    t._addParent(this);
                  }
                  (this._finalizers =
                    null !== (r = this._finalizers) && void 0 !== r
                      ? r
                      : []).push(t);
                }
            }),
            (e.prototype._hasParent = function (e) {
              var t = this._parentage;
              return t === e || (Array.isArray(t) && t.includes(e));
            }),
            (e.prototype._addParent = function (e) {
              var t = this._parentage;
              this._parentage = Array.isArray(t)
                ? (t.push(e), t)
                : t
                ? [t, e]
                : e;
            }),
            (e.prototype._removeParent = function (e) {
              var t = this._parentage;
              t === e ? (this._parentage = null) : Array.isArray(t) && Sn(t, e);
            }),
            (e.prototype.remove = function (t) {
              var r = this._finalizers;
              r && Sn(r, t), t instanceof e && t._removeParent(this);
            }),
            (e.EMPTY = (((t = new e()).closed = !0), t)),
            e
          );
          var t;
        })(),
        En = Tn.EMPTY;
      function xn(e) {
        return (
          e instanceof Tn ||
          (e && 'closed' in e && ln(e.remove) && ln(e.add) && ln(e.unsubscribe))
        );
      }
      function An(e) {
        ln(e) ? e() : e.unsubscribe();
      }
      var jn = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Mn = {
          setTimeout: function (e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
              r[n - 2] = arguments[n];
            var i = Mn.delegate;
            return (null == i ? void 0 : i.setTimeout)
              ? i.setTimeout.apply(i, mn([e, t], gn(r)))
              : setTimeout.apply(void 0, mn([e, t], gn(r)));
          },
          clearTimeout: function (e) {
            var t = Mn.delegate;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function In(e) {
        Mn.setTimeout(function () {
          var t = jn.onUnhandledError;
          if (!t) throw e;
          t(e);
        });
      }
      function kn() {}
      var Dn = Nn('C', void 0, void 0);
      function Nn(e, t, r) {
        return { kind: e, value: t, error: r };
      }
      var On = null;
      function Un(e) {
        if (jn.useDeprecatedSynchronousErrorHandling) {
          var t = !On;
          if ((t && (On = { errorThrown: !1, error: null }), e(), t)) {
            var r = On,
              n = r.errorThrown,
              i = r.error;
            if (((On = null), n)) throw i;
          }
        } else e();
      }
      var _n = (function (e) {
          function t(t) {
            var r = e.call(this) || this;
            return (
              (r.isStopped = !1),
              t
                ? ((r.destination = t), xn(t) && t.add(r))
                : (r.destination = Vn),
              r
            );
          }
          return (
            hn(t, e),
            (t.create = function (e, t, r) {
              return new Bn(e, t, r);
            }),
            (t.prototype.next = function (e) {
              this.isStopped
                ? Ln(
                    (function (e) {
                      return Nn('N', e, void 0);
                    })(e),
                    this,
                  )
                : this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped
                ? Ln(Nn('E', void 0, e), this)
                : ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped
                ? Ln(Dn, this)
                : ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                e.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              try {
                this.destination.error(e);
              } finally {
                this.unsubscribe();
              }
            }),
            (t.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            t
          );
        })(Tn),
        Pn = Function.prototype.bind;
      function zn(e, t) {
        return Pn.call(e, t);
      }
      var Cn = (function () {
          function e(e) {
            this.partialObserver = e;
          }
          return (
            (e.prototype.next = function (e) {
              var t = this.partialObserver;
              if (t.next)
                try {
                  t.next(e);
                } catch (e) {
                  Rn(e);
                }
            }),
            (e.prototype.error = function (e) {
              var t = this.partialObserver;
              if (t.error)
                try {
                  t.error(e);
                } catch (e) {
                  Rn(e);
                }
              else Rn(e);
            }),
            (e.prototype.complete = function () {
              var e = this.partialObserver;
              if (e.complete)
                try {
                  e.complete();
                } catch (e) {
                  Rn(e);
                }
            }),
            e
          );
        })(),
        Bn = (function (e) {
          function t(t, r, n) {
            var i,
              o,
              s = e.call(this) || this;
            return (
              ln(t) || !t
                ? (i = {
                    next: null != t ? t : void 0,
                    error: null != r ? r : void 0,
                    complete: null != n ? n : void 0,
                  })
                : s && jn.useDeprecatedNextContext
                ? (((o = Object.create(t)).unsubscribe = function () {
                    return s.unsubscribe();
                  }),
                  (i = {
                    next: t.next && zn(t.next, o),
                    error: t.error && zn(t.error, o),
                    complete: t.complete && zn(t.complete, o),
                  }))
                : (i = t),
              (s.destination = new Cn(i)),
              s
            );
          }
          return hn(t, e), t;
        })(_n);
      function Rn(e) {
        var t;
        jn.useDeprecatedSynchronousErrorHandling
          ? ((t = e),
            jn.useDeprecatedSynchronousErrorHandling &&
              On &&
              ((On.errorThrown = !0), (On.error = t)))
          : In(e);
      }
      function Ln(e, t) {
        var r = jn.onStoppedNotification;
        r &&
          Mn.setTimeout(function () {
            return r(e, t);
          });
      }
      var Vn = {
        closed: !0,
        next: kn,
        error: function (e) {
          throw e;
        },
        complete: kn,
      };
      function $n(e, t, r, n, i) {
        return new Gn(e, t, r, n, i);
      }
      var Gn = (function (e) {
        function t(t, r, n, i, o, s) {
          var a = e.call(this, t) || this;
          return (
            (a.onFinalize = o),
            (a.shouldUnsubscribe = s),
            (a._next = r
              ? function (e) {
                  try {
                    r(e);
                  } catch (e) {
                    t.error(e);
                  }
                }
              : e.prototype._next),
            (a._error = i
              ? function (e) {
                  try {
                    i(e);
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._error),
            (a._complete = n
              ? function () {
                  try {
                    n();
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._complete),
            a
          );
        }
        return (
          hn(t, e),
          (t.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var r = this.closed;
              e.prototype.unsubscribe.call(this),
                !r &&
                  (null === (t = this.onFinalize) ||
                    void 0 === t ||
                    t.call(this));
            }
          }),
          t
        );
      })(_n);

      // what does it do
      // window.addEventListener(
      //   type || 'desui-wallet-permissions',
      //   function (e) {
      //     ++r <= 1 && (t.next(e), 1 <= r && t.complete());
      //   },
      // );
      function Fn(e, t) {
        return dn(function (r, n) {
          window.ReactNativeWebView.postMessage('return dn(function (r, n) {');
          window.ReactNativeWebView.postMessage(
            JSON.stringify(r?.data?.payload),
          );
          var i = 0;
          r.subscribe(
            $n(n, function (r) {
              return e.call(t, r, i++) && n.next(r);
            }),
          );
        });
      }

      // what does it do
      function Wn(e, t) {
        return dn(function (r, n) {
          var i = 0;
          r.subscribe(
            $n(n, function (r) {
              n.next(e.call(t, r, i++));
            }),
          );
        });
      }

      var Qn = vn(function (e) {
          return function () {
            e(this),
              (this.name = 'EmptyError'),
              (this.message = 'no elements in sequence');
          };
        }),
        Hn =
          ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function Yn(e) {
        return e;
      }
      var Kn = (function () {
        function e(e) {
          e && (this._subscribe = e);
        }
        return (
          (e.prototype.lift = function (t) {
            var r = new e();
            return (r.source = this), (r.operator = t), r;
          }),
          (e.prototype.subscribe = function (e, t, r) {
            var n,
              i = this,
              o =
                ((n = e) && n instanceof _n) ||
                ((function (e) {
                  return e && ln(e.next) && ln(e.error) && ln(e.complete);
                })(n) &&
                  xn(n))
                  ? e
                  : new Bn(e, t, r);
            return (
              Un(function () {
                var e = i,
                  t = e.operator,
                  r = e.source;
                o.add(
                  t ? t.call(o, r) : r ? i._subscribe(o) : i._trySubscribe(o),
                );
              }),
              o
            );
          }),
          (e.prototype._trySubscribe = function (e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              e.error(t);
            }
          }),
          (e.prototype.forEach = function (e, t) {
            var r = this;
            return new (t = qn(t))(function (t, n) {
              var i = new Bn({
                next: function (t) {
                  try {
                    e(t);
                  } catch (e) {
                    n(e), i.unsubscribe();
                  }
                },
                error: n,
                complete: t,
              });
              r.subscribe(i);
            });
          }),
          (e.prototype._subscribe = function (e) {
            var t;
            return null === (t = this.source) || void 0 === t
              ? void 0
              : t.subscribe(e);
          }),
          (e.prototype[Hn] = function () {
            return this;
          }),
          (e.prototype.pipe = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return (0 === (r = e).length
              ? Yn
              : 1 === r.length
              ? r[0]
              : function (e) {
                  return r.reduce(function (e, t) {
                    return t(e);
                  }, e);
                })(this);
            var r;
          }),
          (e.prototype.toPromise = function (e) {
            var t = this;
            return new (e = qn(e))(function (e, r) {
              var n;
              t.subscribe(
                function (e) {
                  return (n = e);
                },
                function (e) {
                  return r(e);
                },
                function () {
                  return e(n);
                },
              );
            });
          }),
          (e.create = function (t) {
            return new e(t);
          }),
          e
        );
      })();
      function qn(e) {
        var t;
        return null !== (t = null != e ? e : jn.Promise) && void 0 !== t
          ? t
          : Promise;
      }
      var Jn = new Kn(function (e) {
        return e.complete();
      });
      // CHECK THIS FUNCTION
      function Zn(e, t, type) {
        // (await Zn(
        //   Wi(this, xi, "m", Fi).call(this, {
        //     type: "acquire-permissions-request",
        //     permissions: Si,
        //   }),
        //   (e) => e.result
        // ))
        return (
          (r = e.pipe(
            1 <= 0
              ? function () {
                  return Jn;
                }
              : dn(function (e, t) {
                  var r = 0;
                  // WHAT IS GOING ON HERE
                  // WHAT SUBSCRIPTION IS GOING ON HERE
                  //
                  // e: source{source{source...}}
                  window.addEventListener(
                    type || 'desui-wallet-permissions',
                    function (e) {
                      ++r <= 1 && (t.next(e), 1 <= r && t.complete());
                    },
                  );
                  // e.subscribe(
                  //   $n(t, function (e) {
                  //     ++r <= 1 && (t.next(e), 1 <= r && t.complete());
                  //   })
                  // );
                }),
            Wn(e => {
              if (e && 'error' in (r = e) && !0 === r.error) {
                window.ReactNativeWebView.postMessage(`
                  Wn((e) => {
                    if (e && "error" in (r = e) && !0 === r.error) {
                `);
                window.ReactNativeWebView.postMessage(e.message);
                throw new Error(e.message);
              }
              var r;
              return t(e);
            }),
          )),
          // here
          new Promise(function (e, t) {
            var n,
              i = !1;
            r.subscribe({
              next: function (e) {
                window.ReactNativeWebView.postMessage(`
                  nextnextnext
                `);
                window.ReactNativeWebView.postMessage(JSON.stringify(e));
                (n = e), (i = !0);
              },
              error: t,
              complete: function () {
                window.ReactNativeWebView.postMessage(`
                  complete
                `);
                window.ReactNativeWebView.postMessage(t);
                i ? e(n) : t(new Qn());
              },
            });
          })
        );
        var r;
      }
      const Xn = {
        randomUUID:
          'undefined' != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let ei;
      const ti = new Uint8Array(16);
      function ri() {
        if (
          !ei &&
          ((ei =
            'undefined' != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !ei)
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
          );
        return ei(ti);
      }
      const ni = [];
      for (let e = 0; e < 256; ++e) ni.push((e + 256).toString(16).slice(1));
      const ii = function (e, t, r) {
        if (Xn.randomUUID && !t && !e) return Xn.randomUUID();
        const n = (e = e || {}).random || (e.rng || ri)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = n[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            ni[e[t + 0]] +
            ni[e[t + 1]] +
            ni[e[t + 2]] +
            ni[e[t + 3]] +
            '-' +
            ni[e[t + 4]] +
            ni[e[t + 5]] +
            '-' +
            ni[e[t + 6]] +
            ni[e[t + 7]] +
            '-' +
            ni[e[t + 8]] +
            ni[e[t + 9]] +
            '-' +
            ni[e[t + 10]] +
            ni[e[t + 11]] +
            ni[e[t + 12]] +
            ni[e[t + 13]] +
            ni[e[t + 14]] +
            ni[e[t + 15]]
          ).toLowerCase();
        })(n);
      };
      var oi = function (e) {
          return e && 'number' == typeof e.length && 'function' != typeof e;
        },
        si =
          'function' == typeof Symbol && Symbol.iterator
            ? Symbol.iterator
            : '@@iterator';
      function ai(e) {
        if (e instanceof Kn) return e;
        if (null != e) {
          if (
            (function (e) {
              return ln(e[Hn]);
            })(e)
          )
            return (
              (i = e),
              new Kn(function (e) {
                var t = i[Hn]();
                if (ln(t.subscribe)) return t.subscribe(e);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              })
            );
          if (oi(e))
            return (function (e) {
              return new Kn(function (t) {
                for (var r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
                t.complete();
              });
            })(e);
          if (ln(null == (n = e) ? void 0 : n.then))
            return (
              (r = e),
              new Kn(function (e) {
                r.then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  },
                ).then(null, In);
              })
            );
          if (
            (function (e) {
              return (
                Symbol.asyncIterator &&
                ln(null == e ? void 0 : e[Symbol.asyncIterator])
              );
            })(e)
          )
            return ci(e);
          if (
            (function (e) {
              return ln(null == e ? void 0 : e[si]);
            })(e)
          )
            return (
              (t = e),
              new Kn(function (e) {
                var r, n;
                try {
                  for (var i = yn(t), o = i.next(); !o.done; o = i.next()) {
                    var s = o.value;
                    if ((e.next(s), e.closed)) return;
                  }
                } catch (e) {
                  r = { error: e };
                } finally {
                  try {
                    o && !o.done && (n = i.return) && n.call(i);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                e.complete();
              })
            );
          if (
            (function (e) {
              return ln(null == e ? void 0 : e.getReader);
            })(e)
          )
            return ci(
              (function (e) {
                return (function (e, t, r) {
                  if (!Symbol.asyncIterator)
                    throw new TypeError('Symbol.asyncIterator is not defined.');
                  var n,
                    i = r.apply(e, t || []),
                    o = [];
                  return (
                    (n = {}),
                    s('next'),
                    s('throw'),
                    s('return'),
                    (n[Symbol.asyncIterator] = function () {
                      return this;
                    }),
                    n
                  );
                  function s(e) {
                    i[e] &&
                      (n[e] = function (t) {
                        return new Promise(function (r, n) {
                          o.push([e, t, r, n]) > 1 || a(e, t);
                        });
                      });
                  }
                  function a(e, t) {
                    try {
                      (r = i[e](t)).value instanceof bn
                        ? Promise.resolve(r.value.v).then(c, u)
                        : l(o[0][2], r);
                    } catch (e) {
                      l(o[0][3], e);
                    }
                    var r;
                  }
                  function c(e) {
                    a('next', e);
                  }
                  function u(e) {
                    a('throw', e);
                  }
                  function l(e, t) {
                    e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
                  }
                })(this, arguments, function () {
                  var t, r, n;
                  return pn(this, function (i) {
                    switch (i.label) {
                      case 0:
                        (t = e.getReader()), (i.label = 1);
                      case 1:
                        i.trys.push([1, , 9, 10]), (i.label = 2);
                      case 2:
                        return [4, bn(t.read())];
                      case 3:
                        return (
                          (r = i.sent()),
                          (n = r.value),
                          r.done ? [4, bn(void 0)] : [3, 5]
                        );
                      case 4:
                        return [2, i.sent()];
                      case 5:
                        return [4, bn(n)];
                      case 6:
                        return [4, i.sent()];
                      case 7:
                        return i.sent(), [3, 2];
                      case 8:
                        return [3, 10];
                      case 9:
                        return t.releaseLock(), [7];
                      case 10:
                        return [2];
                    }
                  });
                });
              })(e),
            );
        }
        var t, r, n, i;
        throw (function (e) {
          return new TypeError(
            'You provided ' +
              (null !== e && 'object' == typeof e
                ? 'an invalid object'
                : "'" + e + "'") +
              ' where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.',
          );
        })(e);
      }
      function ci(e) {
        return new Kn(function (t) {
          (function (e, t) {
            var r, n, i, o, s, a, c, u;
            return (
              (s = this),
              (a = void 0),
              (u = function () {
                var s, a;
                return pn(this, function (c) {
                  switch (c.label) {
                    case 0:
                      c.trys.push([0, 5, 6, 11]),
                        (r = (function (e) {
                          if (!Symbol.asyncIterator)
                            throw new TypeError(
                              'Symbol.asyncIterator is not defined.',
                            );
                          var t,
                            r = e[Symbol.asyncIterator];
                          return r
                            ? r.call(e)
                            : ((e = yn(e)),
                              (t = {}),
                              n('next'),
                              n('throw'),
                              n('return'),
                              (t[Symbol.asyncIterator] = function () {
                                return this;
                              }),
                              t);
                          function n(r) {
                            t[r] =
                              e[r] &&
                              function (t) {
                                return new Promise(function (n, i) {
                                  !(function (e, t, r, n) {
                                    Promise.resolve(n).then(function (t) {
                                      e({ value: t, done: r });
                                    }, t);
                                  })(n, i, (t = e[r](t)).done, t.value);
                                });
                              };
                          }
                        })(e)),
                        (c.label = 1);
                    case 1:
                      return [4, r.next()];
                    case 2:
                      if ((n = c.sent()).done) return [3, 4];
                      if (((s = n.value), t.next(s), t.closed)) return [2];
                      c.label = 3;
                    case 3:
                      return [3, 1];
                    case 4:
                      return [3, 11];
                    case 5:
                      return (a = c.sent()), (i = { error: a }), [3, 11];
                    case 6:
                      return (
                        c.trys.push([6, , 9, 10]),
                        n && !n.done && (o = r.return) ? [4, o.call(r)] : [3, 8]
                      );
                    case 7:
                      c.sent(), (c.label = 8);
                    case 8:
                      return [3, 10];
                    case 9:
                      if (i) throw i.error;
                      return [7];
                    case 10:
                      return [7];
                    case 11:
                      return t.complete(), [2];
                  }
                });
              }),
              new ((c = void 0) || (c = Promise))(function (e, t) {
                function r(e) {
                  try {
                    i(u.next(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function n(e) {
                  try {
                    i(u.throw(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function i(t) {
                  var i;
                  t.done
                    ? e(t.value)
                    : ((i = t.value),
                      i instanceof c
                        ? i
                        : new c(function (e) {
                            e(i);
                          })).then(r, n);
                }
                i((u = u.apply(s, a || [])).next());
              })
            );
          })(e, t).catch(function (e) {
            return t.error(e);
          });
        });
      }
      function ui(e, t, r) {
        return (
          void 0 === r && (r = 1 / 0),
          ln(t)
            ? ui(function (r, n) {
                return Wn(function (e, i) {
                  return t(r, e, n, i);
                })(ai(e(r, n)));
              }, r)
            : ('number' == typeof t && (r = t),
              dn(function (t, n) {
                return (function (e, t, r, n, i, o, s, a) {
                  var c = [],
                    u = 0,
                    l = 0,
                    d = !1,
                    f = function () {
                      !d || c.length || u || t.complete();
                    },
                    h = function (e) {
                      return u < n ? p(e) : c.push(e);
                    },
                    p = function (e) {
                      u++;
                      var i = !1;
                      ai(r(e, l++)).subscribe(
                        $n(
                          t,
                          function (e) {
                            t.next(e);
                          },
                          function () {
                            i = !0;
                          },
                          void 0,
                          function () {
                            if (i)
                              try {
                                u--;
                                for (
                                  var e = function () {
                                    var e = c.shift();
                                    p(e);
                                  };
                                  c.length && u < n;

                                )
                                  e();
                                f();
                              } catch (e) {
                                t.error(e);
                              }
                          },
                        ),
                      );
                    };
                  return (
                    e.subscribe(
                      $n(t, h, function () {
                        (d = !0), f();
                      }),
                    ),
                    function () {}
                  );
                })(t, n, e, r);
              }))
        );
      }
      var li = Array.isArray;
      var di = ['addListener', 'removeListener'],
        fi = ['addEventListener', 'removeEventListener'],
        hi = ['on', 'off'];

      function pi(e, t, r, n) {
        if ((ln(r) && ((n = r), (r = void 0)), n))
          return pi(e, t, r).pipe(
            ((i = n),
            Wn(function (e) {
              return (function (e, t) {
                return li(t) ? e.apply(void 0, mn([], gn(t))) : e(t);
              })(i, e);
            })),
          );
        var i,
          o = gn(
            (function (e) {
              return ln(e.addEventListener) && ln(e.removeEventListener);
            })(e)
              ? fi.map(function (n) {
                  return function (i) {
                    return e[n](t, i, r);
                  };
                })
              : (function (e) {
                  return ln(e.addListener) && ln(e.removeListener);
                })(e)
              ? di.map(yi(e, t))
              : (function (e) {
                  return ln(e.on) && ln(e.off);
                })(e)
              ? hi.map(yi(e, t))
              : [],
            2,
          ),
          s = o[0],
          a = o[1];
        if (!s && oi(e))
          return ui(function (e) {
            return pi(e, t, r);
          })(ai(e));
        if (!s) throw new TypeError('Invalid event target');
        return new Kn(function (e) {
          var t = function () {
            for (var t = [], r = 0; r < arguments.length; r++)
              t[r] = arguments[r];
            return e.next(1 < t.length ? t : t[0]);
          };
          return (
            s(t),
            function () {
              return a(t);
            }
          );
        });
      }
      function yi(e, t) {
        return function (r) {
          return function (n) {
            return e[r](t, n);
          };
        };
      }
      var gi = vn(function (e) {
          return function () {
            e(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          };
        }),
        mi = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.closed = !1),
              (t.currentObservers = null),
              (t.observers = []),
              (t.isStopped = !1),
              (t.hasError = !1),
              (t.thrownError = null),
              t
            );
          }
          return (
            hn(t, e),
            (t.prototype.lift = function (e) {
              var t = new bi(this, this);
              return (t.operator = e), t;
            }),
            (t.prototype._throwIfClosed = function () {
              if (this.closed) throw new gi();
            }),
            (t.prototype.next = function (e) {
              var t = this;
              Un(function () {
                var r, n;
                if ((t._throwIfClosed(), !t.isStopped)) {
                  t.currentObservers ||
                    (t.currentObservers = Array.from(t.observers));
                  try {
                    for (
                      var i = yn(t.currentObservers), o = i.next();
                      !o.done;
                      o = i.next()
                    )
                      o.value.next(e);
                  } catch (e) {
                    r = { error: e };
                  } finally {
                    try {
                      o && !o.done && (n = i.return) && n.call(i);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
              });
            }),
            (t.prototype.error = function (e) {
              var t = this;
              Un(function () {
                if ((t._throwIfClosed(), !t.isStopped)) {
                  (t.hasError = t.isStopped = !0), (t.thrownError = e);
                  for (var r = t.observers; r.length; ) r.shift().error(e);
                }
              });
            }),
            (t.prototype.complete = function () {
              var e = this;
              Un(function () {
                if ((e._throwIfClosed(), !e.isStopped)) {
                  e.isStopped = !0;
                  for (var t = e.observers; t.length; ) t.shift().complete();
                }
              });
            }),
            (t.prototype.unsubscribe = function () {
              (this.isStopped = this.closed = !0),
                (this.observers = this.currentObservers = null);
            }),
            Object.defineProperty(t.prototype, 'observed', {
              get: function () {
                var e;
                return (
                  (null === (e = this.observers) || void 0 === e
                    ? void 0
                    : e.length) > 0
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype._trySubscribe = function (t) {
              return (
                this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
              );
            }),
            (t.prototype._subscribe = function (e) {
              return (
                this._throwIfClosed(),
                this._checkFinalizedStatuses(e),
                this._innerSubscribe(e)
              );
            }),
            (t.prototype._innerSubscribe = function (e) {
              var t = this,
                r = this,
                n = r.hasError,
                i = r.isStopped,
                o = r.observers;
              return n || i
                ? En
                : ((this.currentObservers = null),
                  o.push(e),
                  new Tn(function () {
                    (t.currentObservers = null), Sn(o, e);
                  }));
            }),
            (t.prototype._checkFinalizedStatuses = function (e) {
              var t = this,
                r = t.hasError,
                n = t.thrownError,
                i = t.isStopped;
              r ? e.error(n) : i && e.complete();
            }),
            (t.prototype.asObservable = function () {
              var e = new Kn();
              return (e.source = this), e;
            }),
            (t.create = function (e, t) {
              return new bi(e, t);
            }),
            t
          );
        })(Kn),
        bi = (function (e) {
          function t(t, r) {
            var n = e.call(this) || this;
            return (n.destination = t), (n.source = r), n;
          }
          return (
            hn(t, e),
            (t.prototype.next = function (e) {
              var t, r;
              null ===
                (r =
                  null === (t = this.destination) || void 0 === t
                    ? void 0
                    : t.next) ||
                void 0 === r ||
                r.call(t, e);
            }),
            (t.prototype.error = function (e) {
              var t, r;
              null ===
                (r =
                  null === (t = this.destination) || void 0 === t
                    ? void 0
                    : t.error) ||
                void 0 === r ||
                r.call(t, e);
            }),
            (t.prototype.complete = function () {
              var e, t;
              null ===
                (t =
                  null === (e = this.destination) || void 0 === e
                    ? void 0
                    : e.complete) ||
                void 0 === t ||
                t.call(e);
            }),
            (t.prototype._subscribe = function (e) {
              var t, r;
              return null !==
                (r =
                  null === (t = this.source) || void 0 === t
                    ? void 0
                    : t.subscribe(e)) && void 0 !== r
                ? r
                : En;
            }),
            t
          );
        })(mi);
      function vi(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        if (!0 !== t) {
          if (!1 !== t) {
            var i = new Bn({
              next: function () {
                i.unsubscribe(), e();
              },
            });
            return ai(t.apply(void 0, mn([], gn(r)))).subscribe(i);
          }
        } else e();
      }
      //
      //
      //
      //
      //
      // THIS SHOULD BE WHERE IT LISTENS FOR THE EVENTS
      // THIS SHOULD BE IT
      //
      //
      class wi {
        constructor(e, t) {
          if (e === t)
            throw new Error(
              '[WindowMessageStream] name and target must be different',
            );
          window.ReactNativeWebView.postMessage('class wi');
          (this._name = e),
            (this._target = t),
            (this.messages = pi(window, 'message').pipe(
              Fn(e => {
                window.ReactNativeWebView.postMessage('Fn(e)');
                window.ReactNativeWebView.postMessage(
                  JSON.stringify(e?.data?.payload),
                );
                return e.source === window && e.data.target === this._name;
              }),
              Wn(e => e.data.payload),
              (function (e) {
                void 0 === e && (e = {});
                var t = e.connector,
                  r =
                    void 0 === t
                      ? function () {
                          return new mi();
                        }
                      : t,
                  n = e.resetOnError,
                  i = void 0 === n || n,
                  o = e.resetOnComplete,
                  s = void 0 === o || o,
                  a = e.resetOnRefCountZero,
                  c = void 0 === a || a;
                return function (e) {
                  var t,
                    n,
                    o,
                    a = 0,
                    u = !1,
                    l = !1,
                    d = function () {
                      null == n || n.unsubscribe(), (n = void 0);
                    },
                    f = function () {
                      d(), (t = o = void 0), (u = l = !1);
                    },
                    h = function () {
                      var e = t;
                      f(), null == e || e.unsubscribe();
                    };
                  return dn(function (e, p) {
                    a++, l || u || d();
                    var y = (o = null != o ? o : r());
                    p.add(function () {
                      0 != --a || l || u || (n = vi(h, c));
                    }),
                      y.subscribe(p),
                      !t &&
                        a > 0 &&
                        ((t = new Bn({
                          next: function (e) {
                            return y.next(e);
                          },
                          error: function (e) {
                            (l = !0), d(), (n = vi(f, i, e)), y.error(e);
                          },
                          complete: function () {
                            (u = !0), d(), (n = vi(f, s)), y.complete();
                          },
                        })),
                        ai(e).subscribe(t));
                  })(e);
                };
              })(),
            ));
        }
        send(e) {
          const t = { target: this._target, payload: e };
          window.ReactNativeWebView.postMessage('send something');
          window.ReactNativeWebView.postMessage(JSON.stringify(t));
          window.ReactNativeWebView.postMessage(JSON.stringify(e));
        }
      }
      const Si = ['viewAccount', 'suggestTransactions'];
      var Ti;
      function Ei(e) {
        return 'type' in e && void 0 !== e.type;
      }
      !(function (e) {
        (e.mainnet = 'mainnet'),
          (e.devNet = 'devNet'),
          (e.testNet = 'testNet'),
          (e.local = 'local'),
          (e.customRPC = 'customRPC');
      })(Ti || (Ti = {})),
        Ti.local,
        Ti.testNet,
        Ti.devNet,
        Ti.mainnet,
        Ti.customRPC;
      var xi,
        Ai,
        ji,
        Mi,
        Ii,
        ki,
        Di,
        Ni,
        Oi,
        Ui,
        _i,
        Pi,
        zi,
        Ci,
        Bi,
        Ri,
        Li,
        Vi,
        $i,
        Gi,
        Fi,
        Wi = function (e, t, r, n) {
          // Wi(this, ki, "f").messages.subscribe(({ payload: e }) => {
          //
          //
          if ('a' === r && !n)
            throw new TypeError(
              'Private accessor was defined without a getter',
            );
          if ('function' == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it',
            );
          const x =
            'm' === r ? n : 'a' === r ? n.call(e) : n ? n.value : t.get(e);
          window.ReactNativeWebView.postMessage(
            '-------return object of Wi-------',
          );
          window.ReactNativeWebView.postMessage(
            Object.prototype.toString.call(x) === '[object Object]'
              ? JSON.stringify(x)
              : x,
          );
          return 'm' === r ? n : 'a' === r ? n.call(e) : n ? n.value : t.get(e);
        },
        Qi = function (e, t, r, n, i) {
          if ('m' === n) throw new TypeError('Private method is not writable');
          if ('a' === n && !i)
            throw new TypeError(
              'Private accessor was defined without a setter',
            );
          if ('function' == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              'Cannot write private member to an object whose class did not declare it',
            );
          return 'a' === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
        };
      const Hi = {
        [Ti.local]: p,
        [Ti.devNet]: f,
        [Ti.testNet]: h,
        [Ti.mainnet]: y,
      };
      (Ai = new WeakMap()),
        (ji = new WeakMap()),
        (Mi = new WeakMap()),
        (Ii = new WeakMap()),
        (ki = new WeakMap()),
        (Di = new WeakMap()),
        (Oi = new WeakMap()),
        (Ui = new WeakMap()),
        (_i = new WeakMap()),
        (Pi = new WeakMap()),
        (zi = new WeakMap()),
        (Ci = new WeakMap()),
        (Bi = new WeakMap()),
        (Gi = new WeakMap()),
        (xi = new WeakSet()),
        (Ni = function (e) {
          Qi(
            this,
            Ii,
            e,
            // e.map(
            //   ({ address: e, publicKey: t }) =>
            //     new d({
            //       address: e,
            //       publicKey: t ? m(t) : new Uint8Array(),
            //       chains: Wi(this, Di, "f") ? [Wi(this, Di, "f")] : [],
            //       features: ["sui:signAndExecuteTransaction"],
            //     })
            // ),
            'f',
          );
        }),
        (Ri = function (e) {
          // return Zn(
          //   Wi(this, xi, "m", Fi).call(this, {
          //     type: "has-permissions-request",
          //     permissions: e,
          //   }),
          //   ({ result: e }) => true
          // );
          return true;
        }),
        (Li = function () {
          //window.ReactNativeWebView.postMessage("get-account");
          // return Zn(
          //   Wi(this, xi, "m", Fi).call(this, { type: "get-account" }),
          //   (e) => e.accounts
          // );
          return Ii.get(this);
        }),
        (Vi = function () {
          //window.ReactNativeWebView.postMessage("get-network");
          return '';
          // return Zn(
          //   Wi(this, xi, "m", Fi).call(this, { type: "get-network" }),
          //   ({ network: e }) => e
          // );
        }),
        ($i = function ({ env: e }) {
          Qi(this, Di, e === Ti.customRPC ? 'sui:unknown' : Hi[e], 'f');
        }),
        // MESSAGING
        //
        (Fi = function (e, t) {
          const r = (function (e, t) {
            return { id: t || ii(), payload: e };
          })(e, t);

          const inp1 = Wi(this, ki, 'f').messages;
          const callback12 = Fn(({ id }) => id === r.id);

          const inp2 = callback12(inp1);
          const callback23 = Wn(e => e.payload);

          return Wi(this, ki, 'f').send(r), callback23(inp2);
        }),
        (function (e) {
          const r = ({ register: t }) => t(e);
          try {
            window.dispatchEvent(new t(r));
          } catch (e) {
            window.ReactNativeWebView.postMessage(
              'wallet-standard:register-wallet event could not be dispatched\n',
            );

            window.ReactNativeWebView.postMessage(e);
          }
          try {
            // nah, not this
            window.addEventListener(
              'wallet-standard:app-ready',
              ({ detail: e }) => r(e),
            );
          } catch (e) {
            window.ReactNativeWebView.postMessage(
              'wallet-standard:app-ready event listener could not be added\n',
            );
            window.ReactNativeWebView.postMessage(e);
          }
        })(
          new (class {
            // THE BEGINNING OF THE CLASS
            // THE BEGINNING OF EVERYTHING
            //
            //
            //
            get version() {
              return Wi(this, ji, 'f');
            }
            get name() {
              return Wi(this, Mi, 'f');
            }
            get icon() {
              return 'data:image/png;base64,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';
            }
            get chains() {
              return g;
            }
            get features() {
              return {
                'standard:connect': {
                  version: '1.0.0',
                  connect: Wi(this, _i, 'f'),
                },
                'standard:events': { version: '1.0.0', on: Wi(this, Oi, 'f') },
                'sui:signTransactionBlock': {
                  version: '1.0.0',
                  signTransactionBlock: Wi(this, Pi, 'f'),
                },
                'sui:signAndExecuteTransactionBlock': {
                  version: '1.0.0',
                  signAndExecuteTransactionBlock: Wi(this, zi, 'f'),
                },
                'suiWallet:stake': {
                  version: '0.0.1',
                  stake: Wi(this, Ci, 'f'),
                },
                'sui:signMessage': {
                  version: '1.0.0',
                  signMessage: Wi(this, Bi, 'f'),
                },
                'qredo:connect': {
                  version: '0.0.1',
                  qredoConnect: Wi(this, Gi, 'f'),
                },
              };
            }
            get accounts() {
              // Wi = function (e, t, r, n) t.get(e)
              return Wi(this, Ii, 'f');
            }
            constructor() {
              var e;

              // A COLLECTION OF ALL FUNCTIONS / EVERY FUNCTION POSSIBLE
              xi.add(this),
                Ai.set(this, void 0),
                ji.set(this, '1.0.0'),
                Mi.set(this, 'DeSui Wallet'),
                Ii.set(this, void 0),
                ki.set(this, void 0),
                Di.set(this, null),
                Oi.set(
                  this,
                  (e, t) => (
                    Wi(this, Ai, 'f').on(e, t),
                    () => Wi(this, Ai, 'f').off(e, t)
                  ),
                ),
                Ui.set(this, async () => {
                  if (
                    (Wi(this, xi, 'm', $i).call(
                      this,
                      await Wi(this, xi, 'm', Vi).call(this),
                    ),
                    !(await Wi(this, xi, 'm', Ri).call(this, ['viewAccount'])))
                  ) {
                    window.ReactNativeWebView.postMessage(
                      'Break at viewAccount',
                    );
                    return;
                  }
                  const e = await Wi(this, xi, 'm', Li).call(this);

                  window.addEventListener('desui-wallet-response', ev => {
                    Wi(this, xi, 'm', Ni).call(this, e),
                      Wi(this, Ii, 'f').length &&
                        Wi(this, Ai, 'f').emit('change', {
                          accounts: this.accounts,
                        });
                  });
                }),
                //
                // acquire permissions
                _i.set(
                  this,
                  async e => (
                    e?.silent ||
                      (await Zn(
                        Wi(this, xi, 'm', Fi).call(this, {
                          type: 'acquire-permissions-request',
                          permissions: Si,
                        }),
                        e => e.result,
                      )),
                    await Wi(this, Ui, 'f').call(this),
                    { accounts: this.accounts }
                  ),
                ),
                //
                // sign transaction
                Pi.set(this, async e => {
                  if (!cn(e.transactionBlock))
                    throw new Error(
                      'Unexpect transaction format found. Ensure that you are using the `Transaction` class.',
                    );
                  return Zn(
                    Wi(this, xi, 'm', Fi).call(this, {
                      type: 'sign-transaction-request',
                      transaction: {
                        ...e,
                        account:
                          e.account?.address ||
                          Wi(this, Ii, 'f')[0]?.address ||
                          '',
                        transaction: e.transactionBlock.serialize(),
                      },
                    }),
                    e => e.result,
                    null,
                  );
                }),
                //
                // transaction
                zi.set(this, async e => {
                  if (!cn(e.transactionBlock))
                    throw new Error(
                      'Unexpect transaction format found. Ensure that you are using the `Transaction` class.',
                    );
                  return Zn(
                    Wi(this, xi, 'm', Fi).call(this, {
                      type: 'execute-transaction-request',
                      transaction: {
                        type: 'transaction',
                        data: e.transactionBlock.serialize(),
                        options: e.options,
                        account:
                          e.account?.address ||
                          Wi(this, Ii, 'f')[0]?.address ||
                          '',
                      },
                    }),
                    // it receives the response here, but for some reasons e is CustomEvent object
                    // must be SuiTransactionResponseObject
                    e => {
                      window.ReactNativeWebView.postMessage(e);
                      //if (typeof e === CustomEvent) {
                      window.ReactNativeWebView.postMessage('CstomEventooo');
                      window.ReactNativeWebView.postMessage(e.type);
                      //}
                      return e.detail.result;
                    },
                    //   {
                    //   digest: '7nQc6tA2SVsGTvM9w5BoNggiTijW1t6qrEfk18JrFgMj',
                    //   effects: {
                    //     messageVersion: 'v1',
                    //     status: {
                    //       status: 'success',
                    //     },
                    //     executedEpoch: '140',
                    //     gasUsed: {
                    //       computationCost: '752000',
                    //       storageCost: '3526400',
                    //       storageRebate: '3453516',
                    //       nonRefundableStorageFee: '34884',
                    //     },
                    //     modifiedAtVersions: [
                    //       {
                    //         objectId:
                    //           '0x10887298fbdd809464ea99f97d459e277e99a41c79e348574be07af6e296f52c',
                    //         sequenceNumber: '19500108',
                    //       },
                    //       {
                    //         objectId:
                    //           '0x1c95229674cc7d5b98d727654dbb7174a9e57f9dc7dfe137fa9334fd7f41ad6c',
                    //         sequenceNumber: '19500108',
                    //       },
                    //     ],
                    //     sharedObjects: [
                    //       {
                    //         objectId:
                    //           '0x0000000000000000000000000000000000000000000000000000000000000006',
                    //         version: 11707511,
                    //         digest:
                    //           '3utYxzSRVNtt1FjgvGU4Dzfyitrv1YK5t84cB46KpMJ9',
                    //       },
                    //     ],
                    //     transactionDigest:
                    //       '7nQc6tA2SVsGTvM9w5BoNggiTijW1t6qrEfk18JrFgMj',
                    //     mutated: [
                    //       {
                    //         owner: {
                    //           AddressOwner:
                    //             '0xd722f88ae44e7993b5874b8eaced2477adaa80ce63e075d24e26eb7aee7500d8',
                    //         },
                    //         reference: {
                    //           objectId:
                    //             '0x10887298fbdd809464ea99f97d459e277e99a41c79e348574be07af6e296f52c',
                    //           version: 19500109,
                    //           digest:
                    //             '9BW1d8JdCnd9zcvwTTdfmRfsMrgYeTJwMVdSWQRvLpGW',
                    //         },
                    //       },
                    //       {
                    //         owner: {
                    //           AddressOwner:
                    //             '0xd722f88ae44e7993b5874b8eaced2477adaa80ce63e075d24e26eb7aee7500d8',
                    //         },
                    //         reference: {
                    //           objectId:
                    //             '0x1c95229674cc7d5b98d727654dbb7174a9e57f9dc7dfe137fa9334fd7f41ad6c',
                    //           version: 19500109,
                    //           digest:
                    //             'GLmtFRsPB5K5ucTYmnLZe5KRvrHVPzFRW7kCHTYaZjV9',
                    //         },
                    //       },
                    //     ],
                    //     gasObject: {
                    //       owner: {
                    //         AddressOwner:
                    //           '0xd722f88ae44e7993b5874b8eaced2477adaa80ce63e075d24e26eb7aee7500d8',
                    //       },
                    //       reference: {
                    //         objectId:
                    //           '0x10887298fbdd809464ea99f97d459e277e99a41c79e348574be07af6e296f52c',
                    //         version: 19500109,
                    //         digest:
                    //           '9BW1d8JdCnd9zcvwTTdfmRfsMrgYeTJwMVdSWQRvLpGW',
                    //       },
                    //     },
                    //     dependencies: [
                    //       'BFCHe6cgocL6fgZ3MGEcL4GacDaLXfHEbVcPwZAcUxxd',
                    //       'GXXgBahrtcjn8yBXwJhtyvZcmXZCkX6UPgi6JqhnNd2k',
                    //       'Hcdeuz2dkywh5Ud7SskTN3154AF7hgjUhkpivsDdoXkw',
                    //     ],
                    //   },
                    //   confirmedLocalExecution: true,
                    // }
                    'execute-transaction-request',
                  );
                }),
                //
                //stake
                Ci.set(this, async e => {
                  Wi(this, xi, 'm', Fi).call(this, {
                    type: 'stake-request',
                    validatorAddress: e.validatorAddress,
                  });
                }),
                //
                // sign something
                Bi.set(this, async ({ message: e, account: t }) => {
                  window.ReactNativeWebView.postMessage(
                    '-----Bi function-----',
                  );
                  Zn(
                    Wi(this, xi, 'm', Fi).call(this, {
                      type: 'sign-message-request',
                      args: { message: v(e), accountAddress: t.address },
                    }),
                    e => {
                      if (!e.return)
                        throw new Error('Invalid sign message response');
                      return e.return;
                    },
                  );
                }),
                //
                //
                Gi.set(this, async e => {
                  if (
                    !(await Zn(
                      Wi(this, xi, 'm', Fi).call(this, {
                        type: 'qredo-connect',
                        method: 'connect',
                        args: { ...e },
                      }),
                      e => {
                        if (
                          ('connectResponse',
                          !(
                            Ei((t = e)) &&
                            'qredo-connect' === t.type &&
                            'method' in t &&
                            'connectResponse' === t.method &&
                            'args' in t &&
                            t.args
                          ))
                        )
                          throw new Error('Invalid qredo connect response');
                        var t;
                        return e.args.allowed;
                      },
                    ))
                  )
                    throw new Error('Rejected by user');
                }),
                //
                // have no idea
                Qi(
                  this,
                  Ai,
                  {
                    on: function (t, r) {
                      window.ReactNativeWebView.postMessage('this.Ai(on)');
                      window.ReactNativeWebView.postMessage(
                        Object.prototype.toString.call(t) === '[object Object]'
                          ? JSON.stringify(t)
                          : t,
                      );
                      window.ReactNativeWebView.postMessage(
                        Object.prototype.toString.call(r) === '[object Object]'
                          ? JSON.stringify(r)
                          : r,
                      );
                      var n = e.get(t);
                      window.ReactNativeWebView.postMessage(
                        Object.prototype.toString.call(n) === '[object Object]'
                          ? JSON.stringify(n)
                          : n,
                      );
                      n ? n.push({}) : e.set(t, []);
                    },
                    off: function (t, r) {
                      var n = e.get(t);
                      n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []));
                    },
                    emit: function (t, r) {
                      var n = e.get(t);
                      n &&
                        n.slice().map(function (e) {
                          e(r);
                        }),
                        (n = e.get('*')) &&
                          n.slice().map(function (e) {
                            e(t, r);
                          });
                    },
                    all: (e = e || new Map()), // SEEMS LIKE THE ACCOUNT UPDATE TAKES PLACE HERE
                  },
                  'f',
                ),
                Qi(this, Ii, [], 'f'),
                Qi(this, ki, new wi('sui_in-page', 'sui_content-script'), 'f'),
                window.addEventListener('desui-wallet-response', ev => {
                  const { payload: e } = ev.detail;
                  window.ReactNativeWebView.postMessage(
                    '-----desui-wallet-response-----',
                  );
                  if (
                    (function (e) {
                      return Ei(e) && 'wallet-status-changed' === e.type;
                    })(e)
                  ) {
                    const { network: t = 'sui:testnet', accounts: r } = e;
                    window.ReactNativeWebView.postMessage(
                      'we reached the inner side' + JSON.stringify(r),
                    );
                    t &&
                      (Wi(this, xi, 'm', $i).call(this, t),
                      r ||
                        Qi(
                          this,
                          Wi(this, Ii, 'f').map(
                            ({
                              address: e,
                              features: t,
                              icon: r,
                              label: n,
                              publicKey: i,
                            }) =>
                              new d({
                                address: e,
                                publicKey: i,
                                chains: Wi(this, Di, 'f')
                                  ? [Wi(this, Di, 'f')]
                                  : [],
                                features: t,
                                label: n,
                                icon: r,
                              }),
                          ),
                          r,
                          'f',
                          // Qi = function (e, t, r, n, i) t.set(e, r), r
                          // Qi: set function, 2.set(1, 3)

                          // Wi = function (e, t, r, n) t.get(e)
                          // Wi: get function, 2.get(1)
                        )),
                      r && Wi(this, xi, 'm', Ni).call(this, r),
                      Wi(this, Ai, 'f').emit('change', {
                        accounts: this.accounts,
                      });
                  }
                });
            }
          })(),
        );
    })();
})();
//# sourceMappingURL=dapp-interface.js.map
