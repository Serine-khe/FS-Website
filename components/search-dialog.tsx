"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// This is a simple mock of search results
// In a real application, you would fetch this data from your backend
const searchData = [
  { title: "Physics Department", url: "/departments/physics" },
  { title: "Chemistry Department", url: "/departments/chemistry" },
  { title: "Mathematics Department", url: "/departments/mathematics" },
  { title: "Computer Science Department", url: "/departments/computer-science" },
  { title: "Biology Department", url: "/departments/biology" },
  { title: "Agronomy Department", url: "/departments/agronomy" },
  { title: "Sports Sciences Department", url: "/departments/sports-sciences" },
  { title: "PhD Program", url: "/phd-program" },
  { title: "Research Laboratories", url: "/research-laboratories" },
  { title: "E-Bibliotheque", url: "/e-bibliotheque" },
  { title: "Contact", url: "/contact" },
  { title: "History", url: "/history" },
  { title: "Organization", url: "/organization" },
  { title: "Community", url: "/community" },
  { title: "Projects", url: "/projects" },
  { title: "Publications", url: "/publications" },
  { title: "Studies and Students", url: "/studies-and-students" },
  { title: "Statistics, Information and Guidance", url: "/statistics-information-guidance" },
  { title: "Vice Dean of Postgraduate Education", url: "/vice-dean-postgraduate" },
  { title: "Contact Scolarity", url: "/contact-scolarity" },
]

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<typeof searchData>([])
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    // Filter results based on search query
    const filteredResults = searchData.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))

    setResults(filteredResults)
  }

  const handleResultClick = (url: string) => {
    router.push(url)
    onOpenChange(false)
    setSearchQuery("")
    setResults([])
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Search the website</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for anything..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          <Button type="submit">Search</Button>
        </form>

        {results.length > 0 ? (
          <div className="mt-4 max-h-[300px] overflow-y-auto">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Results ({results.length})</h3>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => handleResultClick(result.url)}
                  >
                    {result.title}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          searchQuery.trim() !== "" && (
            <div className="mt-4 text-center text-muted-foreground">No results found for "{searchQuery}"</div>
          )
        )}
      </DialogContent>
    </Dialog>
  )
}
