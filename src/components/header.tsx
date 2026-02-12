import IconCircle from "@/components/icon-circle"

type HeaderProps = {
  currentColor: string
  callbackOnClick: (currentSize: number) => void
  callbackOnChange: (currentColor:string) => void
  callbackOnClickTrash: () => void
}

const COLORS = [
  { value: "black", bg: "bg-gray-900", ring: "ring-gray-900" },
  { value: "white", bg: "bg-white border border-gray-200", ring: "ring-gray-400" },
  { value: "red", bg: "bg-red-500", ring: "ring-red-500" },
  { value: "blue", bg: "bg-blue-500", ring: "ring-blue-500" },
  { value: "green", bg: "bg-emerald-500", ring: "ring-emerald-500" },
]

const SIZES = [
  { value: 12, label: "S" },
  { value: 24, label: "M" },
  { value: 36, label: "L" },
]

export default function Header(props: HeaderProps) {
  const { currentColor, callbackOnClick, callbackOnChange, callbackOnClickTrash } = props

  return (
    <div className="glass-dark flex flex-row items-center gap-1 px-4 py-2.5 shadow-lg">
      {/* Trash button */}
      <button
        onClick={callbackOnClickTrash}
        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150"
        title="Clear canvas"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>

      {/* Divider */}
      <div className="w-px h-6 bg-white/10 mx-1" />

      {/* Size selector */}
      <div className="flex items-center gap-0.5">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mr-1.5">Size</span>
        {SIZES.map((size) => (
          <button
            key={size.value}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-all duration-150 flex items-center justify-center"
            onClick={() => callbackOnClick(size.value)}
            title={`Size ${size.label}`}
          >
            <IconCircle size={size.value} />
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-white/10 mx-1" />

      {/* Color selector */}
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mr-0.5">Color</span>
        {COLORS.map((color) => (
          <button
            key={color.value}
            onClick={() => callbackOnChange(color.value)}
            className={`w-6 h-6 rounded-full ${color.bg} transition-all duration-150 hover:scale-110 ${
              currentColor === color.value
                ? `ring-2 ${color.ring} ring-offset-2 ring-offset-slate-900 scale-110`
                : "ring-1 ring-white/20"
            }`}
            title={color.value}
          />
        ))}
      </div>
    </div>
  )
}
