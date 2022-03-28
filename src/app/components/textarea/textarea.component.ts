import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from "@angular/forms";


@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent
  implements  ControlValueAccessor {

  @Input() textValue: string = "";

  @Output() returnTextValue: EventEmitter<any> = new EventEmitter();

  @ViewChild("backdrop") $backdrop?: ElementRef<HTMLDivElement>;

  @ViewChild("textarea") $textarea?: ElementRef<HTMLTextAreaElement>;

  constructor() {}
  
  get highlightedText () {
    return this.applyHighlights(this.textValue)
  }

  applyHighlights(text: string) {
    text = text ? text
      .replace(/\n$/g, "\n\n") : '';
    text = text.replace(new RegExp(/#[A-zА-я]+/, 'g'), "<mark class=\"textarea-mark\">$&</mark>");
    return text;
    
  }

  handleScroll() {
    var scrollTop = this.$textarea!.nativeElement.scrollTop;
    this.$backdrop!.nativeElement.scrollTop = scrollTop;

    var scrollLeft = this.$textarea!.nativeElement.scrollLeft;
    this.$backdrop!.nativeElement.scrollLeft = scrollLeft;
  }

  onChanges?: ($value: any) => void;

  onTouched?: () => void;

  writeValue(value: any): void {
    if (value !== undefined) {
      this.textValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
    
    this.onTouched = fn;
  }

  shareData(){
    this.returnTextValue.emit(this.textValue);
  }
}
