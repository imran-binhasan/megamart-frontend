"use client";

import { useState, useRef, useEffect } from "react";
import {
  Command,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Static products (replace with API later)
const products = [
  { id: 1, name: "iPhone 15 Pro" },
  { id: 2, name: "Samsung S23 Ultra" },
  { id: 3, name: "MacBook Air M2" },
  { id: 4, name: "Sony WH-1000XM5" },
  { id: 5, name: "AirPods Pro 2" },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  // Update width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Filtered suggestions
  const filtered = query.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setOpen(value.trim().length > 0);
  };

  const handleSelect = (itemName: string) => {
    setQuery(itemName);
    setOpen(false);
    // Use setTimeout to ensure popover closes before focusing
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <Popover open={open && filtered.length > 0} onOpenChange={setOpen} modal={false}>
      <PopoverTrigger asChild>
        <div ref={containerRef} className="relative w-full">
          <Input
            ref={inputRef}
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            onFocus={() => {
              if (query.trim() && filtered.length > 0) {
                setOpen(true);
              }
            }}
            className="pr-10 pl-3 h-11 rounded-sm bg-white text-black placeholder:text-gray-700 placeholder:text-[15px] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border border-gray-300"
          />

          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            size={18}
          />
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="p-0"
        style={{ width }}
        align="start"
        sideOffset={4}
        onOpenAutoFocus={(e) => {
          // Prevent popover from stealing focus
          e.preventDefault();
        }}
      >
        <Command>
          <CommandList>
            {filtered.map((item) => (
              <CommandItem
                key={item.id}
                value={item.name}
                onSelect={() => handleSelect(item.name)}
                className="cursor-pointer"
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}