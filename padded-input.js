import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
export class PaddedInput extends LitElement {
    constructor() {
        super(...arguments);
        this.value = '';
        this.controlLength = 6;
        this.padDirection = 'Pad left';
        this.padCharacter = '0';
    }
    render() {
        return html `

    `;
    }
}
PaddedInput.styles = css `

  `;
__decorate([
    property({ type: String })
], PaddedInput.prototype, "value", void 0);
__decorate([
    property({ type: Number })
], PaddedInput.prototype, "controlLength", void 0);
__decorate([
    property({ type: String })
], PaddedInput.prototype, "padDirection", void 0);
__decorate([
    property({ type: String })
], PaddedInput.prototype, "padCharacter", void 0);
//# sourceMappingURL=padded-input.js.map