import React, { useState } from "react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding LGBTQ+ Rights in Kenya: A Historical Perspective",
      excerpt: "This article explores the historical context of LGBTQ+ rights in Kenya and the progress made over the years...",
      date: "May 15, 2025",
      author: "Mercy Ndungu",
      category: "Legal Rights",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop",
      content: `LGBTQ+ rights in Kenya have been shaped by a complex interplay of colonial history, cultural beliefs, religious influence, and modern activism. Before colonization, many African societies had diverse understandings of gender and sexuality, with some even embracing non-binary roles and same-sex relationships. However, the British colonial legal system imposed anti-sodomy laws that criminalized same-sex relations, a legacy that still affects Kenyan law today.

The post-independence era saw little change in these laws, and LGBTQ+ individuals continued to face systemic discrimination and social exclusion. However, the 1990s brought a wave of global human rights advocacy, which gradually began influencing Kenya's civil society. Organizations like the Gay and Lesbian Coalition of Kenya (GALCK), formed in the early 2000s, emerged to advocate for equality and visibility.

Over the past two decades, Kenyan courts have played a pivotal role in shaping discourse. Notable cases include the 2019 ruling that upheld the constitutionality of laws criminalizing same-sex acts, as well as more progressive judgments that allowed LGBTQ+ groups to officially register as NGOs. These mixed legal outcomes reflect the ongoing tension between conservative values and constitutional protections.

Social movements, media, and personal narratives have also contributed to slow but growing awareness. Today, Pride events, underground art shows, and digital activism are empowering a new generation to challenge stigma and demand rights. Despite the challenges, there’s been undeniable progress in community visibility, legal representation, and cultural shifts.

This article examines these historical milestones, highlights key legal battles, and shares personal stories from activists and community members who have risked everything to push for change.`


    },
    {
      id: 2,
      title: "Mental Health Resources for LGBTQ+ Youth",
      excerpt: "A comprehensive guide to mental health resources available for LGBTQ+ youth in Kenya and how to access them...",
      date: "April 28, 2025",
      author: "Dr. Brian Kimani",
      category: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop",
      content: `Mental health remains a pressing concern for LGBTQ+ youth in Kenya, many of whom face stigma, rejection, and even violence from their families, communities, and institutions. This article offers a compassionate and practical guide to mental health resources that are accessible, affirming, and inclusive.

We begin by exploring the unique stressors LGBTQ+ youth face — from internalized homophobia and bullying in schools to being disowned by family or denied housing. These experiences can lead to anxiety, depression, substance abuse, and suicidal ideation. Despite the urgent need, mental health support remains underfunded and often inaccessible, especially for queer youth in rural areas.

Thankfully, a growing number of organizations are stepping up. Initiatives like *The Nest*, *Bold Network Africa*, and *TEARS Foundation Kenya* offer counseling services, peer support groups, and even mobile crisis response. We include details on how to access these services, including websites, contact numbers, and available languages.

We also speak to licensed therapists and social workers trained in LGBTQ+ issues, offering insights into what affirmative therapy looks like. Youth share testimonies about their healing journeys, what helped them the most, and advice for others seeking help.

In addition, we highlight free and confidential helplines such as *Mtaani Mental Health Hotline* and online spaces like *Q-Initiative's* Discord communities, which offer a sense of belonging. The article concludes with a list of actionable steps for educators, guardians, and allies on how to support LGBTQ+ youth through trauma-informed care, active listening, and advocacy.

Mental health is a right, not a luxury. This guide is here to remind LGBTQ+ youth that they are not alone — resources and support exist, and healing is possible.`



    },
    {
      id: 3,
      title: "Coming Out Stories: Personal Journeys of Self-Acceptance",
      excerpt: "Community members share their personal experiences of coming out and embracing their identities...",
      date: "April 10, 2025",
      author: "Kevin Otieno",
      category: "Personal Stories",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop",
      content: `Coming out is one of the most personal and powerful moments in an LGBTQ+ person's life. In Kenya, where queer identities are often misunderstood and stigmatized, coming out takes immense courage. This article shares real-life stories from LGBTQ+ individuals across the country — from Nairobi to Kisumu, from rural villages to university campuses — each navigating their own path toward self-acceptance.

We hear from June, a 23-year-old lesbian woman who first realized her attraction to women in high school and faced expulsion after confiding in a teacher. Her story is one of heartbreak but also hope, as she eventually found a chosen family in a local queer support group.

Kevin, a gay man from Mombasa, shares how he concealed his identity for years while living in a deeply religious household. His coming-out experience began with journaling and eventually evolved into an emotional conversation with his mother, who — against his fears — responded with unexpected compassion.

Other contributors describe more difficult journeys — being disowned by family, forced into conversion therapy, or losing jobs. Still, these stories are also about resilience. Many found community online or through affirming organizations that offer counseling, shelter, and mentorship.

Each story is a testimony to the strength it takes to live authentically. We explore common fears, moments of relief, the importance of timing, and how friends and allies can make a difference.

Whether you're thinking of coming out, have already done so, or are just curious about the experiences of others, this collection of voices serves as both a mirror and a guide. It’s about choosing oneself — loudly, proudly, and despite the odds.`



    },
    {
      id: 4,
      title: "Advocating for LGBTQ+ Inclusive Policies in Kenyan Schools",
      excerpt: "An analysis of current educational policies and recommendations for making schools more inclusive...",
      date: "March 22, 2025",
      author: "Daisy Wanjiku",
      category: "Education",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop",
      content: `Kenyan schools often fail to provide a safe and inclusive environment for LGBTQ+ students. Many young people face bullying, disciplinary action, or exclusion simply for expressing their identities. This article delves into how current educational policies can be reformed to create spaces where all students feel seen, supported, and respected.

We begin with a look at how the Education Act and school codes of conduct lack any explicit protections for LGBTQ+ students. Teachers often lack training in diversity and inclusion, which can result in harmful practices — such as punishing students for “unacceptable” gender expression or allowing bullying to go unchecked.

Through interviews with educators, students, and policy experts, we identify key problem areas. A recurring theme is silence — the absence of discussion about LGBTQ+ issues in sex education, guidance counseling, and student leadership spaces.

But change is possible. We highlight schools and organizations piloting inclusive curricula and diversity training for teachers. These initiatives cover topics such as anti-bullying policies, inclusive language, mental health support, and celebrating diverse identities through art and literature.

We also share practical policy recommendations, including creating Gender-Sexuality Alliances (GSAs), involving LGBTQ+ youth in policy-making, and revising curricula to reflect diverse identities and family structures.

Finally, we call on the Ministry of Education and stakeholders to adopt a rights-based approach. Inclusive schools don’t just benefit LGBTQ+ students — they foster empathy, respect, and understanding for all. Education should be a tool for liberation, not discrimination.`


    },
    {
      id: 5,
      title: "Breaking Stereotypes in the Kenyan Workplace",
      excerpt: "Insights into how LGBTQ+ professionals navigate bias and promote inclusivity at work...",
      date: "March 2, 2025",
      author: "Alex Mumo",
      category: "Work & Employment",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop",
      content: `The workplace can be a challenging environment for LGBTQ+ professionals in Kenya, where many still feel the need to hide their identities to protect their livelihoods. This article explores the realities of working while queer, strategies for navigating discrimination, and inspiring stories of those breaking barriers.

We begin with data showing that a significant number of LGBTQ+ Kenyans have experienced workplace harassment, lack of promotion, or wrongful termination due to their identity. Fear of being outed often leads to mental health struggles and job dissatisfaction.

Yet, there’s also hope. We feature stories of queer professionals who have found ways to thrive. Anita, a transgender software engineer in Nairobi, speaks about finding an inclusive tech startup that prioritized merit over bias. Eric, a gay marketing executive, talks about helping his company revise its HR policies to include anti-discrimination clauses and diversity training.

The article also explores what workplace inclusion should look like — from gender-neutral bathrooms and pronoun respect to diversity hiring practices and safe reporting channels for harassment.

We highlight companies that are leading by example, including local startups and international NGOs with inclusive policies. We also discuss the role of labor unions and professional networks like *Kenya Queer Professionals*, which support LGBTQ+ career growth and mentorship.

Importantly, we include a toolkit for both employees and employers: how to come out safely at work, what inclusive HR practices look like, and how to build a supportive culture through allyship and accountability.

Breaking stereotypes is not just about visibility — it’s about rewriting the script of what it means to be queer and successful in Kenya.`



    },
    {
      id: 6,
      title: "The Role of Art in LGBTQ+ Expression",
      excerpt: "How visual and performance art is helping the queer community express identity and resilience...",
      date: "Feb 15, 2025",
      author: "Linda Achieng",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&auto=format&fit=crop",
      content: `Art has long served as a lifeline for the LGBTQ+ community — a way to process pain, assert identity, and inspire change. In Kenya, where queer expression is often policed, art provides a powerful medium for visibility and resistance. This article explores how LGBTQ+ creatives use visual and performance art to challenge norms and build community.

We speak with queer painters, poets, photographers, drag performers, and filmmakers who use their work to reclaim space. Naliaka, a non-binary visual artist, discusses how they use surrealist imagery to depict fluid identities. Their bold use of color and symbolism invites viewers to reimagine gender outside of binary constraints.

We explore collectives like *The Nest Collective* and *Bold Africa* that provide platforms for queer artists through exhibitions, zines, and film. One highlight is the film “Stories of Our Lives,” which sparked national conversation and censorship debates — proving how art can disrupt the status quo.

Performance spaces, though limited, also serve as havens. Nairobi’s underground drag scene and spoken word nights have become safe zones for expression. Queer fashion shows and graffiti projects are turning alleyways into stages for activism.

We also examine how digital platforms like Instagram, YouTube, and TikTok are helping artists bypass traditional gatekeepers. Online spaces allow queer creatives to build audiences, earn income, and collaborate internationally.

This article includes a curated list of upcoming exhibitions, virtual galleries, and ways for allies to support queer artists — through buying work, sharing content, or attending events.

Art is more than self-expression; it’s survival, rebellion, and joy. For Kenya’s LGBTQ+ community, it is a testament to resilience and the boundless creativity that thrives despite oppression.`



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

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

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
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
            marginBottom: '1.2rem',
            lineHeight: '1.1',
  fontFamily: "'Poppins', sans-serif"
          }}>Helpful Resources</h1>
          <p style={{
            fontSize: '0.98rem',
            maxWidth: '1280px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Find guides, directories, and tools to support the LGBTQ+ community in Kenya.
          </p>
        </div>
      </section>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem 1rem'
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
                    cursor: "pointer",
                    ":hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.12)"
                    }
                  }}
                  onClick={() => openModal(post)}
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


      </div>

      {/* Blog Post Modal */}
      {isModalOpen && selectedPost && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          overflowY: "auto"
        }}>
          <div style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            maxWidth: "800px",
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative"
          }}>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#666",
                zIndex: 1001
              }}
            >
              ×
            </button>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px"
              }}
            />
            <div style={{ padding: "2rem" }}>
              <h2 style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#333"
              }}>
                {selectedPost.title}
              </h2>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem"
              }}>
                <span style={{ color: "#4c0585", fontWeight: "500" }}>
                  {selectedPost.author}
                </span>
                <span style={{
                  fontSize: "0.9rem",
                  color: "#666"
                }}>
                  {selectedPost.date}
                </span>
              </div>
              <div style={{
                backgroundColor: "#f0f0f0",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                display: "inline-block",
                marginBottom: "1.5rem"
              }}>
                {selectedPost.category}
              </div>
              <div style={{
                fontSize: "1rem",
                lineHeight: "1.7",
                color: "#333"
              }}>
                <p>{selectedPost.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          body {
            font-size: 14px;
          }
          
          .hero-section {
            padding: 1.5rem 1rem !important;
          }
          
          .hero-title {
            font-size: 1.5rem !important;
          }
          
          .hero-description {
            font-size: 0.9rem !important;
          }
          
          .container {
            padding: 1rem !important;
          }
          
          .blog-grid, .resources-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
            gap: 1rem !important;
          }
          
          .blog-card, .resource-card {
            margin-bottom: 1rem;
          }
          
          .modal-content {
            width: 95% !important;
            max-height: 85vh !important;
          }
          
          .modal-image {
            height: 200px !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-section {
            padding: 1rem !important;
            text-align: center !important;
          }
          
          .hero-title {
            font-size: 1.3rem !important;
          }
          
          .section-title {
            font-size: 1.3rem !important;
          }
          
          .blog-grid, .resources-grid {
            grid-template-columns: 1fr !important;
          }
          
          .modal-title {
            font-size: 1.3rem !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Resources;