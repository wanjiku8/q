import React, { useState } from "react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Understanding LGBTQ+ Rights in Kenya: A Historical Perspective",
      excerpt: "This article explores the historical context of LGBTQ+ rights in Kenya and the progress made over the years...",
      date: "May 15, 2025",
      author: "Mercy Ndungu",
      category: "Legal Rights",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Mental Health Resources for LGBTQ+ Youth",
      excerpt: "A comprehensive guide to mental health resources available for LGBTQ+ youth in Kenya and how to access them...",
      date: "April 28, 2025",
      author: "Dr. Brian Kimani",
      category: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Coming Out Stories: Personal Journeys of Self-Acceptance",
      excerpt: "Community members share their personal experiences of coming out and embracing their identities...",
      date: "April 10, 2025",
      author: "Kevin Otieno",
      category: "Personal Stories",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Advocating for LGBTQ+ Inclusive Policies in Kenyan Schools",
      excerpt: "An analysis of current educational policies and recommendations for making schools more inclusive...",
      date: "March 22, 2025",
      author: "Daisy Wanjiku",
      category: "Education",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Breaking Stereotypes in the Kenyan Workplace",
      excerpt: "Insights into how LGBTQ+ professionals navigate bias and promote inclusivity at work...",
      date: "March 2, 2025",
      author: "Alex Mumo",
      category: "Work & Employment",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "The Role of Art in LGBTQ+ Expression",
      excerpt: "How visual and performance art is helping the queer community express identity and resilience...",
      date: "Feb 15, 2025",
      author: "Linda Achieng",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&auto=format&fit=crop",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "LGBTQ+ Legal Rights Guide",
      type: "PDF Guide",
      description: "A comprehensive guide to legal rights and protections for LGBTQ+ individuals in Kenya.",
      image: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
      link: "https://example.com/legal-rights-guide.pdf",
    },
    {
      id: 2,
      title: "Mental Health Support Directory",
      type: "Directory",
      description: "List of LGBTQ+ friendly mental health professionals and support groups across Kenya.",
      image: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
      link: "https://example.com/mental-health-directory",
    },
    {
      id: 3,
      title: "Coming Out Support Kit",
      type: "Resource Kit",
      description: "Materials and guides to help individuals navigate the coming out process.",
      image: "https://cdn-icons-png.flaticon.com/512/876/876636.png",
      link: "https://example.com/coming-out-kit",
    },
    {
      id: 4,
      title: "Safe Spaces Map",
      type: "Interactive Map",
      description: "Map of LGBTQ+ friendly spaces, organizations, and services throughout Kenya.",
      image: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      link: "https://example.com/safe-spaces-map",
    },
  ];

  const filteredBlogPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredResources = resources.filter(
    (res) =>
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #4c0585, #9B87F5)',
        color: 'white',
        padding: '2rem 1.5rem',
        textAlign: 'left'
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          padding: '0 1rem' 
        }}>
          <h1 style={{ 
            fontSize: '1.4rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem', 
            fontFamily: "'Poppins', sans-serif" 
          }}>
            Helpful Resources
          </h1>
          <p style={{ 
            fontSize: '0.98rem', 
            lineHeight: '1.6',
            maxWidth: '800px'
          }}>
            Find guides, directories, and tools to support the LGBTQ+ community in Kenya.
          </p>
        </div>
      </section>

      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '2rem 1.5rem' 
      }}>
        {/* Search Bar */}
        <div style={{
          marginBottom: '2rem',
          padding: '0 1rem'
        }}>
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: "12px 16px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              maxWidth: '800px',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </div>

        {/* Blog Section */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <h2 style={{ 
              marginBottom: "1.5rem",
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#333",
              fontFamily: "'Poppins', sans-serif"
            }}>
              Latest Blog Posts
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {filteredBlogPosts.map((post) => (
                <div
                  key={post.id}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    ":hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.12)"
                    }
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ 
                      width: "100%", 
                      height: "180px", 
                      objectFit: "cover" 
                    }}
                  />
                  <div style={{ padding: "1.25rem" }}>
                    <h3 style={{ 
                      margin: "0 0 0.5rem 0",
                      fontSize: "1.1rem",
                      fontWeight: "600"
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ 
                      fontSize: "0.9rem", 
                      color: "#555", 
                      marginBottom: "1rem",
                      lineHeight: "1.5"
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <small style={{ color: "#888" }}>{post.date}</small>
                      <span style={{
                        fontSize: "0.75rem",
                        backgroundColor: "#f0f0f0",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px"
                      }}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <h2 style={{ 
              marginBottom: "1.5rem",
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#333",
              fontFamily: "'Poppins', sans-serif"
            }}>
              Helpful Resources
            </h2>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem"
            }}>
              {filteredResources.map((res) => (
                <div
                  key={res.id}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    ":hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.12)"
                    }
                  }}
                >
                  <div style={{
                    backgroundColor: "#f0f0f0",
                    padding: "1.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "150px"
                  }}>
                    <img
                      src={res.image}
                      alt={res.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "contain",
                        filter: "hue-rotate(180deg) brightness(0.7) saturate(3)",
                      }}
                    />
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.5rem"
                    }}>
                      <h3 style={{ 
                        margin: 0,
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#4c0585"
                      }}>
                        {res.title}
                      </h3>
                      <span style={{
                        fontSize: "0.75rem",
                        backgroundColor: "#e9e1f7",
                        color: "#4c0585",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        fontWeight: "500"
                      }}>
                        {res.type}
                      </span>
                    </div>
                    <p style={{ 
                      margin: "0.5rem 0 1rem",
                      fontSize: "0.9rem",
                      color: "#555",
                      lineHeight: "1.5"
                    }}>
                      {res.description}
                    </p>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.5rem 1rem",
                        backgroundColor: "#4c0585",
                        color: "#fff",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        transition: "background-color 0.2s",
                        ":hover": {
                          backgroundColor: "#3a0466"
                        }
                      }}
                    >
                      Access Resource
                      <svg 
                        style={{ 
                          marginLeft: "0.5rem",
                          width: "14px",
                          height: "14px"
                        }} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resources;